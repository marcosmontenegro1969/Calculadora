function calcular() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var operacao = document.getElementById("operacao").value;
  var resultado, resto = 0;
  switch (operacao) {
    case " + ":
      resultado = num1 + num2;
      break;
    case " - ":
      resultado = num1 - num2;
      break;
    case " * ":
      resultado = num1 * num2;
      break;
    case " / ":
      resultado = num1 / num2;
      resto = num1 % num2
      break;
    default:
      resultado = "Operação inválida";
      break;
  }
  if (operacao == " / " && resto != 0) {
      document.getElementById("Resultado").value = Math.floor(resultado) + " (resto : " + resto + ")";
  } else {
      document.getElementById("Resultado").value = resultado;
    }
}  

function limpar() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("operacao").value = " + ";
  document.getElementById("Resultado").value = "";
  document.getElementById("num1").focus();
}




