let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)

const produto = {}
console.log(produto.preco) // Undefined

produto.preco = 3.50
console.log(produto.preco)

produto.preco = undefined // Evite usar undefined
console.log(!!produto.preco)
// delete produto.preco

produto.preco = null // sem espaço
console.log(!!produto.preco)
console.log(produto)