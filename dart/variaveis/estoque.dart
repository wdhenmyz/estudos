void main() {
  String nome_vendedor = 'wesllen';
  int codigo_vendedor = 8988466;
  String nome_produto = 'maçã';
  int codigo_produto = 2231;
  double preco_unitario = 1.50;
  int estoque_inicial = 100;
  int quantidade_vendida = 10;
  
  int estoque_final = estoque_inicial - quantidade_vendida;
  double faturamento_bruto = quantidade_vendida * preco_unitario;
  
  print( "=============== NOTA DE VENDA ===============");
  print( "Vendedor: $nome_vendedor");
  print( "Código do vendedor: $codigo_vendedor");
  print( "----------------------------------------------------------");
  print( "Produto: $nome_produto");
  print( "Código do produto: $codigo_produto");
  print( "Preço unitário: R\$ $preco_unitario");
  print( "Quantidade vendida: $quantidade_vendida");
  print( "----------------------------------------------------------");
  print( "Estoque antes da venda: $estoque_inicial");
  print( "Estoque depois da venda: $estoque_final");
  print( "----------------------------------------------------------");
  print( "FATURAMENTO BRUTO: R\$ $faturamento_bruto");
  print( "==========================================================");
}