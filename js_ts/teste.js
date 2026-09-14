import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface(input, output);

const name = await rl.question("qual o seu nome? ");
const cor = await rl.question("qual a sua cor favorita? ");

console.log(`meu nome é ${name}, minha cor favorita é ${cor}`);

rl.close()
