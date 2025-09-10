function templateBookList(index) {
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
            <input class="input" id="noteInput" type="text" placeholder="Kommentare hinzufügen..." onkeypress="addComment()">
            <button class="inputButton" onclick="">
              <img class="sendButton" src="./assets/img/paper-plane-icon.png" alt="">
            </button>
        </div>  
  `;
}
