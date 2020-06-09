function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2  // tipo ou
    const comprarTv50 = trabalho1 && trabalho2    // tipo E
    const comprarTv = trabalho1 != trabalho2 
    const manterSaudavel = !comprarSorvete // operador unário

    return { comprarSorvete, comprarTv, comprarTv50, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
