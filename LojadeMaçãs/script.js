function calcularCusto(){
let quantidadeMacas, valorMaca, custoTotal;
console.log("Digite o número de maçãs compradas:")
quantidadeMacas = parseFloat(prompt())
if (quantidadeMacas < 12) {
    valorMaca = 1.30;
    custoTotal = valorMaca * quantidadeMacas;
    document.getElementById("resultado").textContent = `O valor total da compra foi de:R$ ${custoTotal.toFixed(2)}`;
   }

else {
    valorMaca = 1
    custoTotal = valorMaca * quantidadeMacas 
    document.getElementById("resultado").textContent = `o valor total da compra foi de:R$ ${custoTotal.toFixed(2)}`;
}
}

