/**
 * Faça um programa que retorne true ou false conforme a entrada Y,y,yes,S,sim
 *
 * ENTRADA                   SAÍDA
 * Y                         true
 * Yes, YES, yes             true
 * y                         true
 * S, SIM                    true
 * s, sim, Sim               true
 * 1                         true
 * 👍                        true
 * n,N,J,0, espaço           false
 * qualquer outra coisa, $   false
 */

// Entrada
var entrada = "1";
var entradasValidas = ['S', 'Y', 'SIM', 'YES', '👍', '1']
entrada = entrada.toUpperCase()

// implemente aqui o condicional para retornar o boolean (true/false) com base na entrada
if (entradasValidas.includes(entrada)){
    var resultado = true;
} else {
    var resultado = false;
}

console.log(resultado);
