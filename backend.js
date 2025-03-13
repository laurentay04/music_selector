window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    //all elements needed for website to work
    const randomize = document.getElementById("randomize");
    const name = document.getElementById("name");

    //albums array, hard coded
    let albums = [
        "All to Zero", "Zero to One", "One to All", "All to Action", "Action to Answer", "Fever Part 3", "Movement", "Outlaw","Will", "Golden Hour Part 1", "Golden Hour Part 2",
        "I Feel", "2", 
        "Get Up", 
        "Guess Who", "Crazy in Love", "Checkmate", 
        "Fearless", "Antifragile", "Unforgiven", "Easy", "Crazy",
        "Armageddon", "Whiplash",
        "Feel Special", "Eyes Wide Open", "Taste of Love", "Formula of Love", "Between 1&2", "Ready to Be", "With You-th", "Zone", 
        "Querencia",
        "Pink Venom",
        "Princess and the Pauper", "Wicked", 
        "Dua Lipa", "Future Nostalgia", "Radical Optimism",
        "My Everything", "Sweetener",
        "brat", 
        "ABBA Gold",
        "Short n' Sweet",
        "Now That's What I Call K-Pop",
        "So Close to What",
        "The Rise and Fall of a Midwest Princess",
        "STARFUCKER", 
        "Mayhem"
    ];

    //when randomize is clicked, it will randomly select an album from the array of albums
    randomize.addEventListener("click", () => {
        let albums_length = albums.length;

        //get a random number from 0 to the length of albums array
        let num = Math.floor(Math.random() * ((albums_length-1) - 0 + 1)) + 0;

        //set the text for name as the random album
        name.textContent = albums[num];

        //set the image for the album cover as the random album's image
        setAlbumCover(albums[num]);
    });
}

   // function to set the album cover based on album name or image data URL
   function setAlbumCover(album) {
    const albumCover = document.getElementById("albumCover");

    //if the album is an image URL, use it
    if (typeof album === "string") {
        albumCover.src = `./covers/${album}.png`;  // fallback for existing albums
    } else {
        albumCover.src = album.image;  // use uploaded image
    }
}
