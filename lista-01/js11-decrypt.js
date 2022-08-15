/**
 * Faça um programa que faça o inverso do programa anterior, ou seja,
 * dado uma entrada criptografada, gere o texto decriptografado
 *
 * ENTRADA          SAÍDA
 * bcbdbuf          abacate
 * @fcsb            zebra
 * $fcsb            Zebra
 *
 * DICAS:
 * ao invés incrementar, vamos precisar decrementar...
 */

// Entrada
var texto = "bcbdbuf", textoDecripto = []

// implemente aqui uma lógica para descriptografar o texto
for (var letra of texto){    
    textoDecripto.push(String.fromCharCode(letra.charCodeAt(0)-1))
}
var textoDecripto = textoDecripto.join('')

console.log(textoDecripto);
