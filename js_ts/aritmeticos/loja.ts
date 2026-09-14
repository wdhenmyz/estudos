const nome_cliente: string = "wesllen"
const quantidade_produto: number = 20
const preco_unitario: number = 20.00
const desconto: number = 5 / 100
const possui_cartao_fidelidade: boolean = true

let permite_promocao: string = "não"

const subtotal: number = quantidade_produto * preco_unitario
const valor_desconto: number = subtotal * desconto
const valor_final: number = subtotal - valor_desconto

if (valor_final >= 300 || possui_cartao_fidelidade) {
  permite_promocao = "sim"

  console.log(`
    ================================================
    nome do cliete: ${nome_cliente}
    subtotal da compra: ${subtotal}
    valor do desconto: ${valor_desconto}
    valor final da compra: ${valor_final}
    pode participar da promoção: ${permite_promocao}
    ================================================
    `)
} else {
  console.log(`
    ================================================
    nome do cliete: ${nome_cliente}
    subtotal da compra: ${subtotal}
    pode participar da promoção: ${permite_promocao}
    ================================================
  `)
}
