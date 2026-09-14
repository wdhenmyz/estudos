const valor_compra: number = Number(prompt("valor da compra", "300.00"))
const temCupon: boolean = prompt("tem cupon?", "sim") === "sim"

if (valor_compra >= 200 || temCupon) {
  console.log("recebeu desconto de 10%")
  console.log("valor da compra: " , valor_compra * (1.0 - 0.10))
} else {
  console.log("valor da compra: " , valor_compra)
}