class carro{
    constructor(velocidadeAtual, velocidadeMaxima,acelerar) {
        this.velocidadeAtual = velocidadeAtual
        this.velocidadeMaxima = velocidadeMaxima
        this.acelerar = (acelerar) => { return velocidadeAtual + acelerar}
    }
}
class ferrari extends carro{
    constructor(velocidadeAtual, velocidadeMaxima,acelerar, cor, modelo) {
        super(velocidadeAtual)
        super(velocidadeMaxima)
        super(2*acelerar)
        this.cor = cor
        this.modelo = modelo
    }
}
class volvo extends carro{
    constructor(velocidadeAtual, velocidadeMaxima,acelerar,cilindradas) {
        super(velocidadeAtual)
        super(velocidadeMaxima)
        super(acelerar)
        this.cor = cor
        this.modelo = modelo
        this.ligarTurbo = () => { return velocidadeAtual*4}
    }
}
