void main() {
  String nome_locatario = 'wesllen';
  int idade_locatario = 24;
  String modelo_carro = 'yamaha';
  int ano_carro = 2015;
  String categoria_carro = 'qualquer';
  double valor_diaria = 40.00;
  int dias_locados = 10;
  double percentual_seguro = 0.08;

  double total_locacao = valor_diaria * dias_locados;
  double valor_seguro = total_locacao * percentual_seguro;
  double total_final_pagar = total_locacao + valor_seguro;
  
  print( "================== CONTRATO DE LOCAÇÃO ==================");
  print( "Locatário: $nome_locatario");
  print( "Idade do locatário: $idade_locatario anos");
  print( "----------------------------------------------------------");
  print( "Veículo: $modelo_carro");
  print( "Ano: $ano_carro");
  print( "Categoria: $categoria_carro");
  print( "Valor da diária: R\$ $valor_diaria");
  print( "Dias locados: $dias_locados");
  print( "----------------------------------------------------------");
  print( "Valor bruto da locação: R\$ $total_locacao");
  print( "Seguro (8%): R\$ $valor_seguro");
  print( "----------------------------------------------------------");
  print( "TOTAL A PAGAR: R\$ $total_final_pagar");
  print( "==========================================================");
}