// auf die Bücher zugreifen

function renderBooks() {
  let bookListRef = document.getElementById("bookList"); //container holen
  bookListRef.innerHTML = ""; //Inhalte löschen

  //Jedes Buch aus dem Array anzeigen
  for (let index = 0; index < books.length; index++) {
    bookListRef.innerHTML += templateBookList(index); // HTML von template.js einfügen
  }
}

// Funktion Like

// Funktion Kommentar
function addComment() {
  let noteInputRef = document.getElementById("noteInput");
  let noteInput = noteInputRef.value;

  if (noteInput.length > 0) {
    books.push(noteInput); //wo will ich es hinpuschen? in die Comments
  }

  noteInputRef.value = "";
}
