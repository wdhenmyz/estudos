const idade = Number(prompt("idade", "17"))
const ehcadastrado: boolean = String(prompt("é cadastrado?")) === "sim"

if (ehcadastrado && idade >= 12) {
  console.log("empréstimo permitido")
} else {
  console.log("empréstimo negado")
}
