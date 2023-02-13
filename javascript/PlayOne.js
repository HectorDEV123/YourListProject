import * as DB from "../javascript/LocalDb/DBINIT.js"

let SongIcon = document.getElementById("PlayListSongIconInput");
let SongName = document.getElementById("PlayListSongNameInput");
let ArtistName = document.getElementById("PlayListArtistInput");
let SongURL = document.getElementById("PlayListURLInput");
let AddSongBtnDOM = document.getElementById("AddSong")

let NonJSONSongIconArray = [];
let NonJSONSongNameArray = [];
let NonJSONArtistNameArray = [];
let NonJSONSongURLArray = [];

let JSONSongIconArray = [];
let JSONSongNameArray = [];
let JSONArtistNameArray = [];
let JSONSongURLArray = [];

function OnUserClick() {
  AddSongToPlayList()
}

function AddSongToPlayList() {
  // ! DOM VARIABLES

  let NewSongContainer = document.createElement("div");
  let NewSongIcon = document.createElement("img");
  let NewArtistName = document.createElement("h5");
  let NewSongName = document.createElement("h2");

  // SONG VALUE VARIABLES
  let NewSongIconVal = SongIcon.value;
  let NewSongNameVal = SongName.value;
  let NewArtistNameVal = ArtistName.value;

  // * ID & CLASS UPDATE

  NewSongIcon.src = NewSongIconVal;
  NewArtistName.innerHTML = NewArtistNameVal;
  NewSongName.innerHTML = NewSongNameVal;
  NewSongIcon.className = "SongIcon";
  NewArtistName.className = "ArtistName";
  NewSongName.className = "SongName";
  NewSongContainer.className = "Container";

  document.body.appendChild(NewSongContainer);
  NewSongContainer.appendChild(NewSongIcon);
  NewSongContainer.appendChild(NewArtistName);
  NewSongContainer.appendChild(NewSongName);

  HelloWorld();

  // PUSH TO DATABASE CODE

  function HelloWorld() {
    // * Store Song Icon
    NonJSONSongIconArray.push(NewSongIconVal);
    JSONSongIconArray = JSON.stringify(NonJSONSongIconArray);
    localStorage.setItem("OneSongIcons", JSONSongIconArray);

    // * Store Song Name

    NonJSONSongNameArray.push(NewSongNameVal);
    JSONSongNameArray = JSON.stringify(NonJSONSongIconArray);
    localStorage.setItem("OneSongNames", JSONSongIconArray);

    // * Store Song Artist

    NonJSONArtistNameArray.push(NewArtistNameVal);
    JSONArtistNameArray = JSON.stringify(NonJSONArtistNameArray);
    localStorage.setItem("OneSongArtist", JSONArtistNameArray);
  }
}

export { NonJSONSongIconArray };

document.getElementById("str").onclick = function () {
  localStorage.clear();
  console.warn("Cleared!");
};

AddSongBtnDOM .addEventListener("click", OnUserClick)
