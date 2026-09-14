import inter from "../int2.ts";

const {ask, close} = inter()

const funcionario: string = await ask("nome do funcionário: ");
const salario: string = await ask("salário base: ");
const aumento: string = await ask("porcentagem de aumento: ");

const novo_salario: number = Number(salario) + (Number(salario) * (Number(aumento) * 0.01))

console.log(funcionario)
console.log("o novo salário: " , novo_salario)
close()
