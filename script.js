class Produto {
    nome;
    marca;
    cor;
    preco;
    quantidade;

    constructor(valorNome, valorMarca, valorCor, valorPreco, valorQuantidade) {
        this.nome = valorNome
        this.marca = valorMarca
        this.cor = valorCor
        this.preco = valorPreco
        this.quantidade = valorQuantidade
    }

    Vender(quantidadeVendida) {
        if (quantidadeVendida > this.quantidade) {
            console.log('Estoque insuficiente!')
            console.log('Apenas', this.quantidade, 'unidades disponiveis!')
            return
        }
        this.quantidade -= quantidadeVendida
    }

    Repor(quantidadeReposta){
        this.quantidade += quantidadeReposta
    }

    MostrarEstoque(){
        console.log('O produto', this.nome, 'da marca', this.marca, ',', this.cor, ', custa R$', this.preco, 'e temos', this.quantidade, 'unidades em estoque.')
    }

    AtualizarPreco(novoValor) {
        this.preco = novoValor
    }
}

class Pessoa {
    nome;
    idade;
    profissao;

    constructor(nome, idade, profissao) {
        this.nome = nome
        this.idade = idade
        this.profissao = profissao
    }
}

class Cliente extends Pessoa {
    telefone;
    email;
    clienteDesde;

    constructor(nome, idade, profissao, telefone, email, clienteDesde) {
        super(nome, idade, profissao)
        this.telefone = telefone
        this.email = email
        this.clienteDesde = clienteDesde
    }
}

const clienteBeatriz = new Cliente('Beatriz', 25, 'Desenvolvedora', '91729273', 'beatrizdfpina@gmail', '1998-05-12')
console.log(clienteBeatriz)


const caneta = new Produto('Caneta', 'BIC', 'azul', 3, 7)
caneta.Vender(10)
caneta.Repor(10)
caneta.Vender(12)
caneta.AtualizarPreco(3.5)
caneta.MostrarEstoque()


