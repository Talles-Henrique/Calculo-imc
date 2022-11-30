/*
peso / altura * altura
Entre 18,5 e 24,9
Entre 25 e 29,9
Entre 30 e 34,9
Mais do que 40
*/

const form = document.querySelector('#formulario');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputPeso = form.querySelector('#peso');
    const inputAltura = form.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
        setResultado('Peso invalido',false);
        return;
    }
    if(!altura){
        setResultado('Altura invalida',false);
        return;
    }
    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const mensagem = `Seu IMC ${imc} (${nivelImc}).`;
    setResultado(mensagem, true);
});
function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}
function getNivelImc(imc){
    const nivel = ['Abaixo do Peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau-1', 
    'Obesidade grau-2', 'Obesidade grau-3'];
    if(imc >= 39.9){
        return nivel[5];
    }
    if(imc >= 34.9 ){
        return nivel[4]
    }
    if(imc >= 29.9 ){
        return nivel[3]
    }
    if(imc >= 24.9){
        return nivel[2]
    }
    if(imc >= 18.5 ){
        return nivel[1]
    }
    if(imc < 18.5 ){
        return nivel[0]
    }
}
function criaP(){
    const p = document.createElement('p');
    return p;
}
function setResultado(mensagem, isValid) {
    const resultado = document.querySelector('#res');
    resultado.innerHTML = '';
    const p = criaP();
    if(isValid){
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    p.innerHTML = mensagem;
    resultado.appendChild(p);
}