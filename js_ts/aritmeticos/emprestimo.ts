const idade = Number(prompt("insira sua idade", "20"));
const salario = Number(prompt("insira seu salario", "2000"));

if (idade >= 18 && salario >= 2000.00) {
  console.log("emprestimo bancário permitido")
} else {
  console.log("emprestimo bancário negado")
}