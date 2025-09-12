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
            <span id="heart(${[index]})" class="heart" onclick="toggleLike(${index})">❤️</span> 
            <span id="likes">${books[index].likes}</span>
          </div>  
        </div>  
            <p><strong>Author:</strong> ${books[index].author}</p>
            <p><strong>Erscheinungsjahr:</strong> ${books[index].publishedyear}
            </p>
            <p><strong>Genre:</strong> ${books[index].genre}</p>
        </section>
        <hr>
        <div class="comments">
            <h3><u>Kommentare:</u></h3>
            <p>${generateComments(index)}</p>
            <div class="commentInput">
              <input class="input" id="noteInput-${index}" type="text" placeholder="Kommentare hinzufügen...">
              <button class="inputButton" onclick="addComment(${index})">
                <img class="sendButton" src="./assets/img/paper-plane-icon.png" alt="Absenden">
              </button>
            </div>
        </div>  
    </div>
  `;
}
