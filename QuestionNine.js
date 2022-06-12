function carro(velocidadeAtual, velocidadeMaxima, quantidadeAcelerar ) {
    this.velocidadeAtual = velocidadeAtual
    this.velocidadeMaxima = velocidadeMaxima
    this.acelerar = (quantidadeAcelerar) => { console.log("Velocidade aumentada para:", quantidadeAcelerar+velocidadeAtual)}
    this.statusVelocidade = "Acima do permitido"
}
const ferrari = new carro(10,80,20)
const volvo = new carro (52,25,10)
console.log(ferrari)
console.log(volvo)