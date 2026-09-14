import {createInterface} from "node:readline/promises";
import { stdin as input, stdout as output } from 'node:process';

const rl = createInterface(input, output)

const produto: string = await rl.question("nome do produto ");
const preco: unknown = await rl.question("preço do produto: ");
const valor_pago: unknown = await rl.question("valor pago: ");

const troco = (valor_pago as number) - (preco as number)

console.log("--------boleto--------")
console.log("produto: ", produto)
console.log("preço: " , preco)
console.log("valor pago: " , valor_pago)
console.log("troco: " , troco)

rl.close()
