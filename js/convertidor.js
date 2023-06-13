function limpiarCampos() {
    document.getElementById("pesos").value = "";
    document.getElementById("dolares").value = "";
    document.getElementById("tipoCambio").value = "";
  }
  
  function convertirMoneda() {
    var pesos = parseFloat(document.getElementById("pesos").value);
    var dolares = parseFloat(document.getElementById("dolares").value);
    var tipoCambio = parseFloat(document.getElementById("tipoCambio").value);
  
    if (!isNaN(pesos) && isNaN(dolares)) {
      // Convertir de pesos a dólares
      dolares = pesos / tipoCambio;
      document.getElementById("dolares").value = dolares.toFixed(2);
    } else if (isNaN(pesos) && !isNaN(dolares)) {
      // Convertir de dólares a pesos
      pesos = dolares * tipoCambio;
      document.getElementById("pesos").value = pesos.toFixed(2);
    }
  }
  