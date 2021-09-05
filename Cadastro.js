console.log("Olá, seja bem vindo!")

let NomeDoEvento = ("Aula Senai UC8 ")
    console.log(NomeDoEvento)

let DataDoEvento = ("31/09/2021")
if (DataDoEvento > "30/09/2021") {
    console.log("Acesso ao evento liberado. ")
}
else {
    console.log("Acesso negado, data inválida. ")
}

let IdadeParticipante = ("19")

if (IdadeParticipante >= "18") {
    console.log("Cadastro liberado. ")
}
else {
    console.log(" Menor de 18, cadastro não permitido. ")
}
let ListaParticipantes = [" João ", " Maria ", " José ", " Ana ", " Henrique "]
console.log("Lista de participantes: " + ListaParticipantes)

let ListaPalestrantes = [" Neymar ", " CR7 ", " Messi ", " Dalessandro "]
console.log("Lista de Palestrantes: " + ListaPalestrantes)

let QuantidadeParticipantes = 100;

for (let contador = 0; contador <= QuantidadeParticipantes; contador++) {
    console.log(contador)
} if (QuantidadeParticipantes <= "100") {
    console.log(" Parabéns, cadastro permitido! ")
} else {
    console.log("Limite de castro excedido")
}