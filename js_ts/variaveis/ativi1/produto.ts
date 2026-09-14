import ask from "../interface.ts";

const produto: string = await ask("nome do produto: ")
const preco: string = await ask("preço do produto: ")
const estoque: string = await ask("estoque do produto: ")

console.log("produto: ", produto)
console.log("preço: ", preco)
console.log("quantidade em estoque: ", estoque)
