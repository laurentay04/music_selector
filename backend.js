window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    //all elements needed for website to work
    const randomize = document.getElementById("randomize");
    const name = document.getElementById("name");

    //albums array, hard coded
    let albums = [
        "All to Zero", "Zero to One", "One to All", "All to Action", "Action to Answer", "Fever Part 3", "Movement", "Outlaw","Will", "Golden Hour: Part 1", "Golden Hour: Part 2",
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
        "Short n' Sweet"
    ];

    document.getElementById("numAlbums").innerHTML = "I have " + albums.length + " CDs.";

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

function setAlbumCover(name) {
    const albumCover = document.getElementById("albumCover");
   switch (name) {
    case "All to Zero":
        albumCover.src = "all_to_zero.jpg";
        break;
    case "Zero to One":
        albumCover.src = "zero_to_one.png";
        break;
    case "One to All":
        albumCover.src = "one_to_all.jpeg";
        break;
    case "All to Action":
        albumCover.src = "all_to_action.png";
        break;
    case "Action to Answer":
        albumCover.src = "action_to_answer.png";
        break;
    case "Fever Part 3":
        albumCover.src = "fever_part_3.jpg";
        break;
    case "Movement":
        albumCover.src = "movement.png";
        break;
    case "Outlaw":
        albumCover.src = "outlaw.png";
        break;
    case "Will": 
        albumCover.src = "will.png";
        break;
    case "Golden Hour: Part 1":
        albumCover.src = "golden_hr_part1.jpg";
        break;
    case "Golden Hour: Part 2":
        albumCover.src = "golden_hr_part2.jpg";
        break;
    case "I Feel":
        albumCover.src = "i_feel.png";
        break;
    case "2":
        albumCover.src = "2.png";
        break;
    case "Get Up":
        albumCover.src = "get_up.png";
        break;
    case "Guess Who":
        albumCover.src = "guess_who.jpg";
        break;
    case "Crazy in Love":
        albumCover.src = "crazy_in_love.jpg";
        break;
    case "Fearless":
        albumCover.src = "fearless.png";
        break;
    case "Antifragile":
        albumCover.src = "antifragile.png";
        break;
    case "Unforgiven":
        albumCover.src = "unforgiven.png";
        break;
    case "Easy":
        albumCover.src = "easy.png";
        break;
    case "Crazy":
        albumCover.src = "crazy.png";
        break;
    case "Armageddon":
        albumCover.src = "armageddon.jpg";
        break;
    case "Whiplash":
        albumCover.src = "whiplash.png";
        break;
    case "Feel Special":
        albumCover.src = "feel_special.png";
        break;
    case "Eyes Wide Open":
        albumCover.src = "eyes_wide_open.jpg";
        break;
    case "Tase of Love":
        albumCover.src = "taste_of_love.png";
        break;
    case "Formula of Love":
        albumCover.src = "formula_of_love.png";
        break;
    case "Between 1&2":
        albumCover.src = "between_1_2.png";
        break;
    case "Ready to Be":
        albumCover.src = "ready_to_be.jpg";
        break;
    case "With You-th":
        albumCover.src = "with_youth.png";
        break;
    case "Zone":
        albumCover.src = "zone.png";
        break;
    case "Querencia":
        albumCover.src = "querencia.jpg";
        break;
    case "Pink Venom":
        albumCover.src = "pink_venom.jpg";
        break;
    case "Checkmate":
        albumCover.src = "checkmate.png";
        break;
    case "Princess and the Pauper":
        albumCover.src = "princess_pauper.jpg";
        break;
    case "Wicked":
        albumCover.src = "wicked.jpg";
        break;
    case "Dua Lipa":
        albumCover.src = "dua_lipa.jpg";
        break;
    case "Future Nostalgia":
        albumCover.src = "future_nostalgia.png";
        break;
    case "Radical Optimism":
        albumCover.src = "radical_optimism.png";
        break;
    case "My Everything":
        albumCover.src = "my_everything.png";
        break;
    case "Sweetener":
        albumCover.src = "sweetener.jpg";
        break;
    case "Short n' Sweet":
        albumCover.src = "short_n_sweet.png";
        break;
    case "brat":
        albumCover.src = "brat.png";
        break;
    case "ABBA Gold":
        albumCover.src = "abba_gold.jpg";
        break;
    default:
        break;
   }
}