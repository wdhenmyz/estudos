aluno = "wesllen"
aprovado = False

nota1 = float(input("nota 1: "))
nota2 = float(input("nota 2: "))

media = (nota1 + nota2)/2
aprovado =  media >= 7.0

print("aluno de nome:", aluno)
print("com média:", media)
print("está aprovado?", aprovado)
