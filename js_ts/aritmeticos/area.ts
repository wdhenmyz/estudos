import {createInterface} from "node:readline/promises";
import { stdin as input, stdout as output } from 'node:process';

const rl = createInterface(input, output)

const base: unknown = await rl.question("base: ");
const altura: unknown = await rl.question("altura: ");

const area = (base as number) * (altura as number)

console.log("área total: " , area)

rl.close()
