//Função contrutora do objeto produto:
function produto(codigo, nome, preco, quantidade) {
    this.codigo = codigo;
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
}

// Criando os produtos:
const celular = new produto;
celular.codigo = 1
celular.nome = " Celular Sansung Pocket"
celular.preco = 550
celular.quantidade = 3


const notebook = new produto;
notebook.codigo = 2
notebook.nome = "MacBook"
notebook.preco = 5000
notebook.quantidade = 7

const carregador = new produto;
carregador.codigo = 3
carregador.nome = "carregado Turbo"
carregador.preco = 15
carregador.quantidade = 30

const capinha = new produto;
capinha.codigo = 4
capinha.nome = "Capinha personalizada Vasco"
capinha.preco = 10
capinha.quantidade = 50

const foneDeOuvido = new produto;
carregador.codigo = 5
carregador.nome = "Fone de Ouvido"
carregador.preco = 25
carregador.quantidade = 15

// Populando o estoque;
const EstoqueGeral = [carregador, celular, notebook, capinha, foneDeOuvido]
function ValidaVenda(codigoProduto, quantidadeProduto){
    let result =  EstoqueGeral.find(Element => Element.codigo == codigoProduto)
    if (result == undefined){
        console.log("Produto não existe.")
    }
    else{
        if (result.quantidade >= quantidadeProduto){
            result.quantidade = result.quantidade - quantidadeProduto;
            console.log("Venda Concluída.")
        }
        else{
            console.log("Não existe a quantidade requerida no estoque atual.")
        }
    }
}

console.log(ValidaVenda(1,8))