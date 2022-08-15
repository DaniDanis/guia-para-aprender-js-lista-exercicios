/**
 * Faça um Programa que inverta um texto. 
 * 
 * ENTRADA          SAÍDA
 * abacate          etacaba
 * 12345            54321
 * 
 */

// Entrada
var entrada = 'abacate'
entrada = String(entrada)
var invertido = []

// gere a variável invertido de forma a transforma a entrada na saída esperada
for (var letra of entrada) {
    invertido.unshift(letra)
}

var invertido = invertido.join('')

console.log(invertido)
