const horas: number = Number(prompt("quantas horas?", "20"))

const minutos: number = horas * 60
const segundos: number = minutos * 60

console.log(horas , "horas são equivalentes á:" , minutos , "minutos ou" , segundos , "segundos")