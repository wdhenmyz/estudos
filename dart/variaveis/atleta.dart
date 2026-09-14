void main() {
  String nome_atleta = 'wesllen';
  int idade_atleta = 23;
  double altura_atleta = 1.80;
  String modalidade = 'arremesso de lanças';

  double arremesso_1 = 25.00;
  double arremesso_2 = 23.47;
  double arremesso_3 = 26.80;
  
  double distancia_total = arremesso_1 + arremesso_2 + arremesso_3;
  double distancia_media = distancia_total / 3;
  
  print( "================== FICHA DO ATLETA ==================");
  print( "Nome: $nome_atleta");
  print( "Idade: $idade_atleta anos");
  print( "Altura: $altura_atleta M");
  print( "Modalidade: $modalidade");
  print( "----------------------------------------------------------");
  print( "1º Arremesso: $arremesso_1 M");
  print( "2º Arremesso: $arremesso_2 M");
  print( "3º Arremesso: $arremesso_3 M");
  print( "----------------------------------------------------------");
  print( "Distância total arremessada: $distancia_total M");
  print( "Média de distância por arremesso: $distancia_media M");
  print( "==========================================================");
}