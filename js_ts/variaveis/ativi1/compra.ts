import inter from "../int2.ts";

const {ask, close} = inter();

const produto: string = await ask("nome do produto: ");
const preco: string = await ask("preço do produto: ");
const quantidade: string = await ask("quantidade: ");

const valor_total: number = Number(preco) * Number(quantidade);

console.log(produto)
console.log("valor da compra:", valor_total)

close()
