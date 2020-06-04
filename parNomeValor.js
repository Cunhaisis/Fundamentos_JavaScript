const saudacao = 'Opa' // contexto léxico 1

function exec(){
    const saudacao = 'Oi'
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor

const Cliente = {
    nome: 'Saulo',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro: 'Rua Muito Longe'
    }
}
console.log(saudacao)
console.log(exec)
console.log(Cliente)