function Multipli1(vetorValoresNumericos, numeroInteiro){
    let vetorResultado = []
    for (i=0; i<vetorValoresNumericos.length; i++){
        vetorResultado[i] = vetorValoresNumericos[i]*numeroInteiro
    }
    console.log("A primeira função retorna: ",vetorResultado)
    if (numeroInteiro>=5){
        Multipli2(vetorValoresNumericos, numeroInteiro);
    }
   
}
function Multipli2(vetorValoresNumericos, numeroInteiro){
    let vetorResultado =[]
    for (i=0; i<vetorValoresNumericos.length; i++){
        vetorResultado[i] = vetorValoresNumericos[i] * numeroInteiro
    }
    console.log("A segunda função retorna: ",vetorResultado)
}

//Chamada da função
let vetor = [10,3,5,7]
let numero = 5
Multipli1(vetor, numero) 