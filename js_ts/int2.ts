import {createInterface} from "node:readline/promises";
import { stdin as input, stdout as output } from 'node:process';

const rl = createInterface(input, output);

export default function inter () {
  return {
    ask: async (question:string) => await rl.question(question),
    close: () => rl.close()
  }
}
