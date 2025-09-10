function templateBookList(index) {
  // Warum gibt er das Template nicht zurück?
  return `
    <h2>${books[index].name}</h2>
        <hr>
        <img class="imgBook" src="./assets/img/book_207114.png" alt="Abbildung eines Buchs">
        <hr>
        <section class="details">
            <p>${books[index].price}</p>
            <span class="like" onclick="toggleLike">❤️</span> 
            <span>${books[index].likes}</span>
            <p>Author: ${books[index].author}</p>
            <p>Erscheinungsjahr: ${books[index].publishedyear}</p>
            <p>Genre: ${books[index].genre}</p>
        </section>
        <hr>
        <div class="comments">
            <h3>Kommentare: "${books[index].comments}"</h3>
            <input class="input" id="noteInput" type="text" placeholder="Kommentare hinzufügen..." >
            <button class="inputButton">
              <img class="sendButton" src="" alt="">
            </button>
        </div>  
  `;
}

// wie greife ich auf die richtigen Bücher zu und wie verdoppelt sich dieses Template pro Buch?
