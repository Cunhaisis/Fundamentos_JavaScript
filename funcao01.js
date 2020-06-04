//Função sem retorno
function imprimeSoma(a,b) {
    console.log(a + b) 
    
}
imprimeSoma(2,3)

//Função com retorno
function soma(a, b = 0) {
    return a+ b   
}
console.log(soma(7,3))