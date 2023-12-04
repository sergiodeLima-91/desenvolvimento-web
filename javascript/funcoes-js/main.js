/**Funções que não retornam nada são chamadas de PROCEDIMENTOS. 
 * 
 * O QUE É UMA FUNÇÃO?
 * Pequeno trecho de código que pode ser executado várias vezes com valores diferentes passados como parâmetros.
 * 
*/

/**FUNÇÕES PROCEDIMENTAIS: */
function ComidaPreferida(comida){
    console.log('Eu gosto de comer ' + comida)
}


ComidaPreferida('orelha de velho')
ComidaPreferida('rubacão')

/**FUNÇÕES COM RETORNO: */
 function quadrado(numero){
    return numero * numero
 }


 console.log(quadrado(10));
 console.log(quadrado(15));
 console.log(quadrado(20));

 /** ORGANIZANDO FUNÇÕES */
function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5){
        return 'ABAIXO DO PESO';
    } else if (imc >= 18.5 && imc <= 25){
        return 'PESO NORMAL';
    } else if (imc >= 25 && imc <= 30){
        return 'ACIMA DO PESO';
    } else if (imc >= 30 && imc <= 40){
        return 'OBESIDADE';
    } else{
        return 'OBESIDADE GRAVE!';
    }
}

function main() {
    const peso = 120;
    const altura = 1.75;
    const imc = calcularIMC(peso, altura);
    console.log('Seu IMC é '+ (imc).toFixed(2) + ' e sua classificação se enquadra em ' + classificarImc(imc));
}

main()

/** No JS funções são objetos manipuláveis do tipo função. São tão manipuláveis quanto uma string ou inteiro. Porém,isto é bem particular NO JS, pois na maioria das linguagens de programação não há isso em relação as funções. Rode o comando abaixo para ver .*/
console.log(main);
/** FUNÇÃO EXECUTADA IMEDIATAMENTE */
// Existe uma maneira de executar uma função automaticamente e de forma imediata:

function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5){
        return 'ABAIXO DO PESO';
    } else if (imc >= 18.5 && imc <= 25){
        return 'PESO NORMAL';
    } else if (imc >= 25 && imc <= 30){
        return 'ACIMA DO PESO';
    } else if (imc >= 30 && imc <= 40){
        return 'OBESIDADE';
    } else{
        return 'OBESIDADE GRAVE!';
    }
}

(function main() {
    const peso = 120;
    const altura = 1.75;
    const imc = calcularIMC(peso, altura);
    console.log('Seu IMC é '+ (imc).toFixed(2) + ' e sua classificação se enquadra em ' + classificarImc(imc));
})(); // <-----

//É possível até mesmo retirar o nome da função "main" que antecede o parêntese sem afetar a execução dela. Isso porque ela está referenciada nos parênteses seguintes mostrados na seta. Isso é feito para ISOLAR O CÓDIGO E/OU O ESCOPO DA FUNÇÃO.

//=== ARROW FUNCTIONS:
// Sintaxe: () => {}
// Arrow (seta) Functions são uma maneira mais elegante e sucinta de escrever funções! 
/** Exemplo de uma função de boas vindas: */
function boasVindas(nome) {
    return `Seja bem-vindo, (a) ${nome}!`
}

const meuNome = 'Sérgio'
console.log(`Retornando função com sintaxe normal: ${boasVindas(meuNome)}`)
// Agora vamos usar com Arrow Functions e veremos que ficará numa linha de código só:
const boasVindasAf = nome => `Seja bem-vindo (a), ${nome}!`
console.log(`Retornando Arrow Function: ${boasVindasAf(meuNome)}`) 