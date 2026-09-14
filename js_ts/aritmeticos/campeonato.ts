const nome_competidor: string = String(prompt("nome do competidor", 'wesllen'));
const idade: number = Number(prompt("idade do competidor", '19'));
const peso: number = Number(prompt("peso do competidor", '75'));
const tem_autorizacao: boolean = String(prompt("tem autorização", 'sim')) === "sim";
const pagou_inscricao: boolean = String(prompt("pagou a inscrição", 'sim')) === "sim";
let inscricao: string = "recusada"

if (idade >= 18 && pagou_inscricao || idade >= 16 && tem_autorizacao && pagou_inscricao) {
  inscricao = "aprovado"
}

console.log("------ competidor -------")
console.log("nome do competidor: " , nome_competidor)
console.log("idade do competidor: " , idade)
console.log("peso: " , peso)
console.log("situação da inscrição: " , inscricao)