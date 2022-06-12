function calculaMedia(n1, n2, n3){
  let notas = [n1,n2,n3]
  let order = notas.sort(function(a,b){return b-a})
  let result = ((order[0]*4)+(3*order[1])+(3*order[2]))/10
  console.log("A média é", result)
}
function leituraDosValores(){
  let codigo = prompt("Digite seu código");
  if(codigo<0){
    leitura()
  }
  else{
    let nota1 = prompt("Digite a nota 1:")
    let nota2 = prompt("Digite a nota 2:")
    let nota3 = prompt("Digite a nota 3:")
    calculaMedia(nota1,nota2,nota3)
  }
}

//Chamada da função
leituraDosValores()