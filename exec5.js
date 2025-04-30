let sb = 9000
let inss 
let dpsinss
let impostorenda
let dpsimre

inss = sb*10/100
dpsinss = sb-inss
impostorenda = sb*5/100
dpsimre = dpsinss-impostorenda

console.log(`O salário bruto é ${sb}`)
console.log(`O INSS é ${inss}`)
console.log(`O salário depois do INSS é ${dpsinss}`)
console.log(`O imposto de renda é ${impostorenda}`)
console.log(`O salário depois do imposto de renda é ${dpsimre}`)