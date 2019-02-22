function dataStudents() {
var data = [
  {"Nome" : "Pierpaolo", "Cognome" : "Wurzburger", "Età" : 27},
  {"Nome" : "Luca", "Cognome" : "Esposito", "Età" : 23},
  {"Nome" : "Fabio", "Cognome" : "Basile", "Età" : 30},
  {"Nome" : "Carlo", "Cognome" : "Rubino", "Età" : 22}
];
var nome;
var cognome;
var età;
/////Chiedo dati al cliente
var iname = prompt("Dammi un nome: ");
var isurname = prompt("Dammi un cognome: ");
var iage = prompt("Dammi un Età: ");
var element = {};
data.Nome = iname;
data.Cognome = isurname;
data.Età = iage;
data.push({Nome: iname, Cognome: isurname, Età: iage});

for (var i = 0; i < data.length; i++) {
  nome = document.getElementById("studenti").innerHTML += "Nome: " + data[i].Nome + "<br>";
  cognome = document.getElementById("studenti").innerHTML += "Cognome: " + data[i].Cognome + "<br>";
  età = document.getElementById("studenti").innerHTML += "Età: " + data[i].Età + "<br><br>"
}
// return; Funziona anche senza return
}

dataStudents();
