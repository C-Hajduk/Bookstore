// auf die Bücher zugreifen

function renderBooks() {
  let list = document.getElementById("bookList");
  list.innerHTML = "";

  for (let index = 0; index < books.length; index++) {
    list.innerHTML += templateBookList(index);
  }
}

// Funktion Like

// Funktion Kommentar
