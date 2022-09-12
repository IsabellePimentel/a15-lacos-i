let comida = prompt("Deseja comer mais coxinha?Responda com 'S' ou 'N'")
let conta = 0


while(comida === "S"){
    conta = conta + 2.50
comida = prompt("Deseja comer mais coxinha?Responda com 'S' ou 'N'")
}
alert("O valor total da conta é: " + conta + " reias")