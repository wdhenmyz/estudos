import inter from "../int2.ts";

const {ask, close} = inter();

const num1: unknown = await ask("numero: ");
const num2: unknown = await ask("numero: ");

const soma: number = Number(num1) + Number(num2)

console.log("soma dos dois números: ", soma)
close()
