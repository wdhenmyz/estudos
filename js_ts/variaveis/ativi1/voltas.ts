const nome_corredor = String(prompt("nome do corredor:"));
const tempo_1_volta = Number(prompt("tempo da primeira volta:"));
const tempo_2_volta = Number(prompt("tempo da segunda volta:"));
const tempo_3_volta = Number(prompt("tempo da terceira volta:"));

const tempo_total: number = tempo_1_volta + tempo_2_volta + tempo_3_volta;

console.log("corredor de nome: " , nome_corredor);
console.log("tempo total: " , tempo_total, "minutos");
