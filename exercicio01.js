// #1 - Exercí­cio
const nome = "João Carlos"
console.log(nome,"nasceu em 2000");
console.log("Em 2019 " + nome + " começou a programar");
console.log(`Em 2020 ${nome} ingressou na faculdade`);
console.log("Em 2022 como programador,", nome, "conquistou seu primeiro emprego");


// #2 - Exercí­cio
const meuAnodeNascimento = 1983
const anoAtual = 2022
console.log(meuAnodeNascimento, anoAtual)

let minhaIdade = anoAtual - meuAnodeNascimento
console.log(minhaIdade)

const numeroCinco = 5
console.log(`Em ${anoAtual + numeroCinco}, estarei com ${minhaIdade + numeroCinco} anos.`)


// 3# - Exercí­cio
let tempCelsius = 100
let tempFahrenheit = (tempCelsius * 9 / 5) + 32
console.log(`A temperatura de ${tempCelsius.toFixed(1)} °C é igual a Fahrenheit: ${tempFahrenheit.toFixed(1)} °F`) 


// 4# - Exercí­cio
const name = "Afrânio Gonçalves"
const idade = 39
const anoDeNascimento = 1983
const peso = 81 // em Kg
const altura = 1.78 // em metros
let imc = peso / (altura * altura)

console.log(`${name} tem ${idade} anos, pesa ${peso.toFixed(1)} kg,
tem ${altura} m de altura e seu IMC é de ${imc.toFixed(2)}.
${name} nasceu em ${anoDeNascimento}.`)


// 5# - Exercício
let valorAbastecido = 100
const valorGasolina = 5.966
const valorAlcool = 4.632
const mediaConsumoGasolina = 10.2 // média de consumo por litro com gasolina
const mediaConsumoAlcool = 9.8 // média de consumo por litro com alcool
let volumeGasolina = valorAbastecido / valorGasolina
let volumeAlcool = valorAbastecido / valorAlcool
let autonomiaGasolina = volumeGasolina * mediaConsumoGasolina
let autonomiaAlcool = volumeAlcool * mediaConsumoAlcool

console.log(`"COLOCANDO R$ ${valorAbastecido.toFixed(2)} é possível:"
"GASOLINA: Percorrer ${autonomiaGasolina.toFixed(1)} KM e colocar ${volumeGasolina.toFixed(1)} litros"
"ÁLCOOL: Percorrer ${autonomiaAlcool.toFixed(1)} KM e colocar ${volumeAlcool.toFixed(1)} litros"`)  
