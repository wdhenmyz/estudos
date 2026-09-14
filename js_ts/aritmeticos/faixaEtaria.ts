const idade:number = Number(prompt("insira sua idade", "16"));
const condicao: boolean = idade > 13 && idade < 17

if (condicao) {
  console.log("idade está ente 13 e 17 anos")
} else {
  console.log("idade não está ente 13 e 17 anos")
}