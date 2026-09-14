const idade: number = Number(prompt("qual a sua idade?", "19"));
const ehadulto: boolean = idade >= 18

if (ehadulto) {
  console.log("é um maior de idade")
} else {
  console.log("é um menor de idade")
}
