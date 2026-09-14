const num1: number = Number(prompt("insira numero", "4"))
const num2: number = Number(prompt("insira numero", "4"))

const ehigual = num1 === num2
const ehdiferente = num1 !== num2
const ehmaior = num1 > num2
const ehmenor = num1 < num2

console.log("os números são iguais?" , ehigual)
console.log("os números são diferentes?" , ehdiferente)
console.log("o primeiro número é maior?" , ehmaior)
console.log("o primeiro número é menor?" , ehmenor)