function templateBookList(index) {
  return `
    <h2>${[]}</h2> <!-- Buch Titel --> 
        <hr>
        <img src="./assets/img/book_207114.png" alt=""> <!-- Buch img --> 
        <hr>
        <section>
            <p>${[]}</p> <!-- Buch preis -->
            <span class="like" onclick="toggleLike">❤️</span> <!-- Likes -->
            <span>${[]}</span>
            <p>Author: ${[]}</p>
            <p>Erscheinungsjahr: ${[]}</p>
            <p>Genre: ${[]}</p>
        </section>
        <hr>
        <div class="comments">
            <h3>Kommentare: ${[]}</h3>
            <input id="noteInput" type="text" placeholder="Kommentare hinzufügen..." >
        </div>  
  `;
}

// wie greife ich auf die richtigen Bücher zu und wie verdoppelt sich dieses Template pro Buch?
