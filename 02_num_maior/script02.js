function Calculeomaior() {
var valor1 = parseFloat(document.getElementById("valor1").value);
var valor2 = parseFloat(document.getElementById("valor2").value);
var resultado = document.getElementById("resultadomaiorvalor");


    if (valor1 > valor2) {
        resultado.innerHTML = "O maior valor é: " + valor1;
    } else if (valor2 > valor1) {
        resultado.innerHTML = "O maior valor é: " + valor2;
    } else{
        resultado.innerHTML = "Os valores são iguais.";
    }
 
}