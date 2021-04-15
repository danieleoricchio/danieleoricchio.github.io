function CalcolaLorenz() {
  var altezza = document.getElementById("h").value;
  if(altezza > 0) {
    var pesoForma = (altezza - 100) - ((altezza - 150) / 2);
  }
  else{
    return;
  }
  document.getElementById("esitoLorenz").innerHTML = "Il tuo peso forma e' " + pesoForma + "kg";
}

function CalcolaBroca() {
  var altezza = document.getElementById("h").value;
  if(altezza > 0) {
    var pesoForma = altezza - 104;
  }
  else{
    return;
  }
  document.getElementById("esitoBroca").innerHTML = "Il tuo peso forma e' " + pesoForma + "kg";
}

function CalcolaWanDerVael() {
  var altezza = document.getElementById("h").value;
  var sesso = document.getElementById("sesso").value;
  if(sesso == "Maschio") {
    var pesoForma = ((altezza - 150) * 0.75) + 50;
  }
  else if(sesso == "Femmina"){
    var pesoForma = ((altezza - 150) * 0.6) + 50;
  }
  else{
    return;
  }
  document.getElementById("esitoWanDerVael").innerHTML = "Il tuo peso forma e' " + pesoForma + "kg";
}

function CalcolaBMI() {
  var altezza = document.getElementById("h").value;
  var peso = document.getElementById("p").value;
  var altezzaMetri = altezza / 100;
  if(altezzaMetri > 0) {
    var BMI = peso / (altezzaMetri * altezzaMetri);
  }
  else{
    return;
  }
  document.getElementById("esitoBMI").innerHTML = "Il BMI e' " + BMI + " kg/m2";
}