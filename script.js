//Desafio Classificador de nível

//Variáveis

let nomeHeroi = "FerMarques"
let qtdXp = "10500"

//Condicionais

if(qtdXp < 1000){
    nivel = "ferro"
    console.log("Ferro")
} else if (qtdXp >= 1001 && qtdXp <= 2000 ){
    nivel = "bronze"
    console.log("Bronze")
} else if (qtdXp >= 2001 && qtdXp <= 5000){
    nivel = "prata"
    console.log("Prata")
} else if (qtdXp >= 6001 && qtdXp <= 7000){
    nivel = "ouro"
    console.log("Ouro")
} else if(qtdXp >= 7001 && qtdXp <= 8000){
    nivel = "platina"
    console.log("Platina")
} else if (qtdXp >= 8001 && qtdXp <= 9000){
    nivel = "ascendente"
    console.log("Ascendente")
} else if (qtdXp >= 9001 && qtdXp <= 10000){
    nivel = "imortal"
    console.log("Imortal")
} else if (qtdXp >= 10001){
    nivel = "radiante"
    console.log("Radiante")
}

// Mensagem de saída
console.log("O herói de nome " + nomeHeroi + " está no nível de " + nivel + "!")