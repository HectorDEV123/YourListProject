let SongIcon = document.getElementById("PlayListSongIconInput");
let SongName = document.getElementById("PlayListSongNameInput");
let ArtistName = document.getElementById("PlayListArtistInput");
let SongURL = document.getElementById("PlayListURLInput");
let AddSongBtn = document.getElementById("AddSong");

let SongIconArray = [];
let SongNameArray = [];
let ArtistNameArray = []
let SongURLArray = [];

let Songs = [SongIconArray, SongNameArray, ArtistNameArray, SongURLArray];

function OnUserClick() {
  AddSongToPlayList();
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

  document.body.appendChild(NewSongContainer);
  NewSongContainer.appendChild(NewSongIcon);
  NewSongContainer.appendChild(NewArtistName);
  NewSongContainer.appendChild(NewSongName);


  SongIconArray.push(NewSongIconVal);
  SongNameArray.push(NewSongNameVal);
  ArtistNameArray.push(NewArtistNameVal);


}



AddSongBtn.addEventListener("click", OnUserClick);
