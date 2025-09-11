// auf die Bücher zugreifen

function renderBooks() {
  let bookListRef = document.getElementById("bookList"); //holt den Container-DIV aus dem HTML (id="bookList")
  bookListRef.innerHTML = ""; //leert den Container, damit wir mit einer frischen Anzeige starten

  //Jedes Buch aus dem Array anzeigen
  for (let index = 0; index < books.length; index++) { //geht durch ALLE Bücher im Array "books"
    bookListRef.innerHTML += templateBookList(index); // ruft die Funktion templateBookList() auf und hängt das erzeugte HTML für ein Buch an
  }
}

// Funktion Like

function toggleLike (index) {
  
}


function addComment(index) {
  // holt sich die werte aus den Inputs
  let noteInputRef = document.getElementById("noteInput-" + index); //greift auf das richtige Eingabefeld zu (jedes Buch hat eine eigene ID, z. B. "noteInput-0")
  let noteInput = noteInputRef.value; //nimmt den Text, den der Benutzer eingegeben hat

  if (noteInput.length > 0) { //prüft: hat der Benutzer überhaupt etwas geschrieben?
    books[index].comments.push({'name': 'Gast', 'comment': noteInput}); // wenn ja: speichert einen neuen Kommentar im richtigen Buch im Array
  }

  renderBooks(); //  ruft die Funktion von oben auf: die Seite wird neu aufgebaut, diesmal MIT dem neuen Kommentar

  noteInputRef.value = ""; //leert das Eingabefeld wieder, damit man sofort einen neuen Kommentar tippen könnte
}

function generateComments(index) {
  let comments = ""; //Start mit leerem String
  for (let indexComment = 0; indexComment < books[index].comments.length; indexComment++) { //läuft durch ALLE Kommentare, die zu diesem Buch gehören
    comments += `<strong>${books[index].comments[indexComment].name}: </strong> ` //Name des Kommentators fett anhängen
    comments += `${books[index].comments[indexComment].comment}<br>` // den Kommentar anhängen und einen Zeilenumbruch machen
  }
  return comments; //gibt den fertigen HTML-String zurück
}
