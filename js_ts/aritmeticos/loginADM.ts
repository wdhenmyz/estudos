let ehADM: string|boolean = String(prompt("é admnistrador?", "sim"));
let temSenhaEspecial: string|boolean = String(prompt("tem senha especial", "sim"));

ehADM = ehADM === "sim"
temSenhaEspecial = temSenhaEspecial === "sim"

if (ehADM && temSenhaEspecial) {
  console.log("acesso permitido")
} else {
  console.log("acesso negado")
}