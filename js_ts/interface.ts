import {createInterface} from "node:readline/promises";
import { stdin as input, stdout as output } from 'node:process';

const rl = createInterface(input, output);

const ask = async (question:string) => {
  const value: string = await rl.question(question)
  return value
}

export default ask
