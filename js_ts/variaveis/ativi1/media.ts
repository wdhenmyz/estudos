import inter from "../int2.ts";

const {ask, close} = inter();

const nota1: string = await ask("nota 1: ");
const nota2: string = await ask("nota 2: ")

console.log("média:" , (Number(nota1) + Number(nota2)) / 2)
close()
