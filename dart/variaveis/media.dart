void main() {
  String nome_aluno = 'wesllen';
  int matricula = 20230067189;
  String turma = 'A - 35N12';
  String sexo_aluno = 'M';
  double nota_1 = 7.8;
  double nota_2 = 5.7;
  double nota_3 = 7.0;

  String media_simples = ((nota_1 + nota_2 + nota_3) / 3).toStringAsFixed(2);
  String media_ponderada = ((nota_1 * 2 + nota_2 * 3 + nota_3 * 4) / 9).toStringAsFixed(2);

  bool aprovado = double.parse(media_ponderada) >= 7.0;

  print( "================= BOLETIM ESCOLAR =================");
  print( "Aluno: $nome_aluno");
  print( "Matrícula: $matricula");
  print( "Turma: $turma");
  print( "Sexo: $sexo_aluno");
  print( "----------------------------------------------------------");
  print( "Nota 1 (peso 2): $nota_1");
  print( "Nota 2 (peso 3): $nota_2");
  print( "Nota 3 (peso 4): $nota_3");
  print( "----------------------------------------------------------");
  print( "Média Aritmética Simples: $media_simples");
  print( "Média Ponderada (2,3,4): $media_ponderada");
  print( "----------------------------------------------------------");
  print( "Aluno está aprovado?: $aprovado");
  print( "==========================================================");
}