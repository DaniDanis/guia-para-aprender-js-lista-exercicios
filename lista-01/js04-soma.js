/**
 * Faça um Programa que imprima a soma de dois numeros (inteiros ou com casas decimais).
 * Se os valores de entrada não forem números válidos, imprima uma mensagem de aviso.
 * 
 * ENTRADA                           SAÍDA
 *    10 e 20                        30
 *    40.5 e 1.5                     42
 *    40,5 e 1,5                     42
 *    A e 40                         'A' não é um número
 *    40 e A                         'A' não é um número
 *
 * DICA:
 * Para verificar se A não número use o console o node e debug isto...
 * qual é o typeof 'A'? qual o typeof 42?
 * qual é o typeof(typeof A)
 */

// Entrada
var soma = 0
var n1 = 'A'
var n2 = 'A'

// Saída
if (typeof(n1) == 'number' && typeof(n2) == 'number'){
    resultado = n1 + n2
    console.log(resultado)
} 
if (typeof(n1) == 'string') {
    console.log(n1 + ' ' + 'não é um número')
}
if (typeof(n2) == 'string') {
    console.log(n2 + ' ' + 'não é um número')
}


