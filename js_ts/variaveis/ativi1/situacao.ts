const aluno = String(prompt("nome"));
const nota1 = Number(prompt("nota 1"));
const nota2 = Number(prompt("nota 2"));

const media: number = (nota1 + nota2) / 2;
const aprovado: boolean = media >= 7.0

console.log("aluno de nome: " , aluno)
console.log("com média: " , media)
console.log("está aprovado? " , aprovado)
