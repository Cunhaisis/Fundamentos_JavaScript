console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Celular'
//obj1['nome'] = 'Celular2' 
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
}

const obj2 = new Obj('Mesa')
const obj3 = new Obj('Cadeira')
console.log(obj2.nome)
console.log(obj3.nome)