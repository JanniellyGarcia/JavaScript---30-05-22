function Divisor3(number){
    const resto = number % 3
    if (resto == 0){
        console.log("It´s true")
        return true;
    }
    else{
        console.log("It´s false")
        return false
    }
}

//Chamada da Função
Divisor3(25);