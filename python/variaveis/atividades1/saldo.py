nome = "wesllen"
saldo = 2300.50

valorDepositado = int(input("quanto vc quer depositar? "))
valorSacado = int(input("quanto vc quer retirar? "))

saldo = saldo + valorDepositado - valorSacado

print("cliente de nome:", nome)
print("saldo atual:", saldo)
