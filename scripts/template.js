function templateBookList(index) {
  return `
    <div class="book">
    <h2>${books[index].name}</h2>
        <hr>
        <img class="imgBook" src="./assets/img/book_207114.png" alt="Abbildung eines Buchs">
        <hr>
        <section class="details">
        <div class="wrapper">
          <p class="price">${books[index].price} €</p>
          <div class="wrapperLike">
            <span class="like" onclick="toggleLike">❤️</span> 
            <span>${books[index].likes}</span>
          </div>  
        </div>  
            <p><strong>Author:</strong> ${books[index].author}</p>
            <p><strong>Erscheinungsjahr:</strong> ${books[index].publishedyear}</p>
            <p><strong>Genre:</strong> ${books[index].genre}</p>
        </section>
        <hr>
        <div class="comments">
            <h3>Kommentare: </h3>
            <p>${books[index].comments}</p>
            <div class="commentInput">
              <input class="input" id="noteInput" type="text" placeholder="Kommentare hinzufügen..." onkeypress="addComment()">
              <button class="inputButton" onclick="">
                <img class="sendButton" src="./assets/img/paper-plane-icon.png" alt="Absenden">
              </button>
            </div>
        </div>  
  `;
}
