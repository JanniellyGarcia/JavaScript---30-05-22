function bank(valor) {
    let cont = [0, 0, 0, 0, 0]
    let Cedulas = [100, 50, 10, 5, 1]
    for (let i = 0; i < 5; i++) {
        console.log(i)
        console.log(Cedulas[i])
        let resultadoAux = valor % Cedulas[i]
        cont[i] = Math.trunc(valor / Cedulas[i])
        let resto = 0;
        resto = valor - cont[i]
        if (resto > 0) {
            valor = valor - (cont[i] * Cedulas[i])
        }
    }
    console.log("Serão:" + cont[0] +
        " nota(s) de R$100, " + cont[1] +
        " nota(s) de R$50.00, " + cont[2] +
        " nota(s) de R$ 10.00, " + cont[3] +
        " nota(s) de R$ 5.00 e " + cont[4] +
        " nota(s) de R$ 1.00.")

}

//Chamada da Função
bank(155)