void main() {
  String nome = "wesllen";
  double idade = 28;
  double altura = 1.76;
  String sexo = "M";

  String produto = 'maçã';
  String categoria = 'fruta';
  double preco_unitario = 1.00;
  int quantidade = 6;
  double taxa_frete = 5.50;

  double valor_produto = preco_unitario * quantidade;
  double total = valor_produto + taxa_frete;
  
  print("==============================================");
  print("          CUPOM DA COMPRA - CLIENTE          ");
  print("==============================================");
  print('Cliente: $nome');
  print("Idade: $idade anos");
  print("Altura: $altura m");
  print("Sexo: $sexo");
  print("----------------------------------------------");
  print("Produto: $produto");
  print("Categoria: $categoria");
  print("Preço unitário: R\$ $preco_unitario");
  print("Quantidade: $quantidade");
  print("Valor dos produtos: R\$ $valor_produto");
  print("Taxa de frete: R\$ $taxa_frete");
  print("----------------------------------------------");
  print("VALOR TOTAL DA COMPRA: R\$ $total");
  print("==============================================");
}