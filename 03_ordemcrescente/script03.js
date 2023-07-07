function ordenar() {
    var valor1 = parseFloat(document.getElementById("valor1").value);
    var valor2 = parseFloat (document.getElementById("valor2").value);
    var resultado = document.getElementById("resultado");

   
   if (valor1 < valor2) {
    resultado.innerHTML = "Os valores em ordem crescente são: " + valor1 +" e " + valor2;
   } else if (valor1 > valor2)
{
    resultado.innerHTML = "Os valores em ordem crescente são: " + valor2 +" e " + valor1;
} else {
    resultado.innerHTML = "Os valores são iguais. ";
}
}