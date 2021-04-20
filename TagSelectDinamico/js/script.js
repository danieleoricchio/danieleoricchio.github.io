function setup(){
  var array_sesso = ["Maschio", "Femmina"];

  sel_sesso = document.getElementById("sesso");

  for (var sesso in array_sesso) {
    sel_sesso.add( new Option( array_sesso[sesso] ));
  }

  var array_occhi = ["Neri", "castani", "Ambra", "Verdi", "Grigi", "Azzurri", "Rossi"];

  sel_occhi = document.getElementById("coloreocchi");

  for (var occhi in array_occhi) {
    sel_occhi.add( new Option( array_occhi[occhi] ));
  }

  var array_provincie = ["Bergamo", "Brescia", "Como", "Cremona", "Lecco", "Lodi", "Mantova", "Milano", "Monza Brianza", "Pavia", "Sondrio", "Varese"];

  sel_provincie = document.getElementById("provincia");

  for (var provincie in array_provincie) {
    sel_provincie.add( new Option( array_provincie[provincie] ));
  }
}