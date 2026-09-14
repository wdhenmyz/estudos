const nota: number = Number(prompt("nota final", "7"))
const sePassou: boolean = nota >= 7

if (sePassou) {
  console.log("aprovado")
} else {
  console.log("o aluno ficou em recuperação")
}