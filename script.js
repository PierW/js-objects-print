function dataStudents() {
var data = [
  {"Nome" : "Pierpaolo", "Cognome" : "Wurzburger", "Età" : 27},
  {"Nome" : "Luca", "Cognome" : "Esposito", "Età" : 23},
  {"Nome" : "Fabio", "Cognome" : "Basile", "Età" : 30},
  {"Nome" : "Carlo", "Cognome" : "Rubino", "Età" : 22}
];

/////Chiedo dati al cliente
var iname = prompt("Dammi un nome: ");
var isurname = prompt("Dammi un cognome: ");
var iage = prompt("Dammi un Età: ");
// data.Nome = iname;
// data.Cognome = isurname;
// data.Età = Number(iage);
data.push({Nome: iname, Cognome: isurname, Età: Number(iage)});

for (var i = 0; i < data.length; i++) {
 document.getElementById("studenti").innerHTML += "Nome: " + data[i].Nome + "<br>";
 document.getElementById("studenti").innerHTML += "Cognome: " + data[i].Cognome + "<br>";
 document.getElementById("studenti").innerHTML += "Età: " + data[i].Età + "<br><br>"
}
// return; Funziona anche senza return
console.log(data);
}

dataStudents();
