const valor_diaria: number = 10.00;

const nome = prompt("nome:", "wesllen"); 
const idade = prompt("idade:", "23");
const altura = prompt("altura:", "1.79");
const categoria_bicicleta = prompt("categoria da bicicleta:", "nova");
const dias_alugados = Number(prompt("dias alugados:", "3"));

const total_aluguel: number = dias_alugados * valor_diaria;

console.log("cliente cadastrado");
console.log("===============================================");
console.log("nome do cliente:" , nome);
console.log("idade do cliente:" , idade);
console.log("altura do cliente:" , altura);
console.log("categoria da bicicleta:" , categoria_bicicleta);
console.log("valor da diária:" , valor_diaria);
console.log("dias alugados:" , dias_alugados);
console.log("valor total do aluguel:" , total_aluguel);
console.log("===============================================");