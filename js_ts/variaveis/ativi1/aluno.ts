import ask from "../interface.ts";

const nome: string = await ask("nome do aluno: ");
const matricula: string = await ask("matricula do aluno: ");
const turma: string = await ask("turma do aluno: ");
const altura: string = await ask("altura do aluno: ");

console.log("=========== aluno==========")
console.log("nome do aluno: " , nome)
console.log("matrícula: " , matricula)
console.log("turma: " , turma)
console.log("altura: " , altura)
