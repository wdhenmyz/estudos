diaria = 15.00

nome = input("cliente: ")
idade = input("idade: ")
altura = input("altura: ")
categoria_bicicleta = input("categoria da bicicleta: ")
dias_alugados = int(input("dias alugados: "))

print("cliente cadastrado")
print("===============================================")
print("nome do cliente:", nome)
print("idade do cliente:", idade)
print("altura do cliente:", altura)
print("categoria da bicicleta:", categoria_bicicleta)
print("valor da diária:", diaria)
print("dias alugados:", dias_alugados)
print("valor total do aluguel:", diaria * dias_alugados)
print("===============================================")
