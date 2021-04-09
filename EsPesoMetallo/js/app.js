function CalcolaPeso(form){
  var volume = document.getElementById('volume').value;
  var materiale = document.getElementById('materiale').value;
  var pesoSpecifico;
  if(materiale == "Acciaio"){
    pesoSpecifico = 7900;
  }
  else if(materiale == "Ottone"){
    pesoSpecifico = 8700;
  }
  else if(materiale == "Alluminio"){
    pesoSpecifico = 2700;
  }
  else if(materiale == "Rame"){
    pesoSpecifico = 8960;
  }
  else {
    return;
  }
  var peso = pesoSpecifico * volume;

  document.getElementById("risultato").innerHTML = "Il peso é: " + peso + "kg";
}