function imprimirImpares(inicio, fim){
   let auxiliar = inicio +1;
   let vetorImpares =[]
   let i=0;
    while(auxiliar < fim){
        vetorImpares[i]= auxiliar
        auxiliar = auxiliar+2
        i=i+1;
    }
    for(j=0; j< vetorImpares.length; j++){
        
    console.log(vetorImpares[j])
    }
}

//Chamada da função
imprimirImpares(0,100)