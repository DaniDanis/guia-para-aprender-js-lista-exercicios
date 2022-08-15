/**
 * Faça um Programa que dado um número de entrada,
 * exiba o dia correspondente da semana.
 * 
 * ENTRADA      SAÍDA
 * 1            Domingo
 * 2            Segunda
 * 3            Terça
 * ...
 * 7            Sábado
 * Se digitar outro valor deve aparecer: 'Entrada inválida.'
 */

// Entrada
var entrada = 4
const diasDaSemana = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta',
    'Sábado',
]

// implemente aqui o condicional para retornar o boolean (true/false) com base na entrada
if (!isNaN(entrada)){
    var resultado = diasDaSemana[entrada-1]
} else {
    var resultado = 'Entrada inválida, por favor digite um valor entre 1 e 7'
}
if (resultado == undefined){
    var resultado = 'Entrada inválida, por favor digite um valor entre 1 e 7'
}
console.log(resultado)
