function CompraBiglietto(form) {
  var km = document.getElementById('km').value;
  var classe, costoBiglietto, costoTot;
  if(form.classe1.checked){
    classe = "Prima classe";
    costoBiglietto = 0.43;
  }
  else if(form.classe2.checked){
    classe = "Seconda classe"
    costoBiglietto = 0.20;
  }
  
  var numPers = document.getElementById('persone').value;
  if(numPers == 1){
    costoTot = costoBiglietto  *numPers;
  }
  else if(numPers == 2){
    costoTot = costoBiglietto * numPers;
  }
  else if(numPers == 3){
    costoTot = costoBiglietto * numPers;
  }
  else if(numPers == 4){
    costoTot = costoBiglietto * numPers;
  }
  else if(numPers == 5){
    costoTot = costoBiglietto * numPers;
  }
  else if(numPers == 6){
    costoTot = costoBiglietto * numPers;
  }
  
  if(costoTot > 0){
    document.getElementById('esito').innerHTML = "Il costo e' " + costoTot + " euro";
  }
  else{
    document.getElementById('esito').innerHTML = "Il costo e' 0 euro";
  }
}