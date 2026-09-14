import {createInterface} from "node:readline/promises";
import { stdin as input, stdout as output } from 'node:process';

const rl = createInterface(input, output);

const nome: string = await rl.question("nome: ");
const idade: string = await rl.question("idade: ")

console.log("Olá," , nome + "!" , "Você tem" , idade , "anos")
