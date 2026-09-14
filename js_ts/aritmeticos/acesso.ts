const idade: number = Number(prompt("qual a sua idade", "18"));
const ehautorizado: string = String(prompt("tem autorização?", "não"));

if (idade >= 18 && ehautorizado === "sim") {
  console.log("entrada permitida")
} else {
  console.log("entrada negada")
}
