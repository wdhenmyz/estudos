const estoque: number = Number(prompt("quantidade de estoque", '6'));
const tem_produto: boolean = estoque >= 1

if (tem_produto) {
  console.log("ainda tem pelo menos um produto disponível")
} else {
  console.log("o estoque está atualmente vazio")
}