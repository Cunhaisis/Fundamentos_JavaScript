const valores = [7.7, 8.9, 6.3, 9.2] // Array declarada de maneira literal separado por virgula
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) // Diz quantos elementos tem no array

valores.push({id: 3}, false, null, 'teste') // Push Adiciona elementos no array  
console.log(valores)
console.log(valores.pop()) // Elimina um valor do array
delete valores[0]
console.log(valores)

console.log(typeof valores)