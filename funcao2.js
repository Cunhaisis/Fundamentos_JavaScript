// Armazenando uma função em uma variável
const imprimeSoma = function (a,b) {
    console.log(a+b)
    
}

imprimeSoma(2,3)

//Armazenando um função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2,3))

//retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2,3))
