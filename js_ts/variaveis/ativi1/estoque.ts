let estoque: number = 100;

const produto: string|null = prompt("nome do produto: ");
const vendidas: string|null = prompt("quantidades vendidas: ");

estoque = estoque - Number(vendidas);

console.log("nome do produto :" , produto);
 console.log("quantidade atual no estoque: " , estoque);
