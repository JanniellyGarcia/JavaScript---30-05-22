function atribuiConceito(vetorDeNotas){
    for(i = 0 ;i < vetorDeNotas.length ; i++ ){
        if(vetorDeNotas[i] > 0.0 && vetorDeNotas[i]< 4.9){
            console.log("A nota", vetorDeNotas[i]," entra no Coneceito D")
        }
        else if(vetorDeNotas[i] > 5.0 && vetorDeNotas[i]< 6.9){
            console.log("A nota", vetorDeNotas[i]," entra no Coneceito C")
        }
        else if(vetorDeNotas[i] > 7.0 && vetorDeNotas[i]< 8.9){
            console.log("A nota", vetorDeNotas[i]," entra no Coneceito B")
        }
        else if(vetorDeNotas[i] > 9.0 && vetorDeNotas[i]<= 10.0){
            console.log("A nota ", vetorDeNotas[i]," entra no Coneceito A.")
        }
        else{
            console.log(vetorDeNotas[i],"Inválida. As notas atribuídas devem ser maiores que 0 e menores que 10")
        }
    }
}

//Chamada da função
let vetor = [11, 5.8, 3.9, 7.5, 6.8]
atribuiConceito(vetor)