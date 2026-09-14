const saldo_inicial: number = 2000.00

const nome = String(prompt("seu nome:"))
const valor_depositado = Number(prompt("insira o valor depositado:"))
const valor_sacado = Number(prompt("insira o valor sacado:"))

const saldo_final: number = saldo_inicial + valor_depositado - valor_sacado

console.log("cliente de nome:" , nome)
console.log("saldo atual:" , saldo_final)
