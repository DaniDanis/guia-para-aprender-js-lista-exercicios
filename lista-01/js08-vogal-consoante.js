/**
 * Faça um Programa que verifique se uma letra 
 * de entrada é vogal ou consoante.
 * 
 * Entrada           Saída
 * a                 vogal
 * I                 vogal
 * z                 consoante
 * J                 consoante
*/

// Entrada
var entrada = '3'
entrada = entrada.toLocaleLowerCase()
const vogais = ['a', 'e', 'i', 'o', 'u']


// implemente aqui o condicional para retornar o boolean (true/false) com base na entrada
var resultado = 'caractere invalido'
if (vogais.includes(entrada)){
    resultado = 'vogal'
} else if (isNaN(entrada)) {
    resultado = 'consoante'
}

console.log(resultado)
