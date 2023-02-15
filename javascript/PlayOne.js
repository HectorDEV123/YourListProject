let SongIcon = document.getElementById("PlayListSongIconInput");
let SongName = document.getElementById("PlayListSongNameInput");
let ArtistName = document.getElementById("PlayListArtistInput");
let SongURL = document.getElementById("PlayListURLInput");
let AddSongBtn = document.getElementById("AddSongDOM");



function ExeCreateSong(){

  ExeCreateSong(CreateObject);
}

AddSongBtn.addEventListener("click", ExeCreateSong)


function CreateSong(CallBack){


  // * Creates Song and Appends it to a designated container

  let SongIconVal = SongIcon.value;
  let songNameVal = SongName.value;
  let ArtistName = ArtistName.value;

  
  const NewSongContainer = document.createElement("div");
  const SongIcon = document.createElement("img");
  const SongName = document.createElement("h5");
  const ArtistName = document.createElement("h5");
  const SongURL = null;

  SongIcon.src = SongIconVal;
  SongName.InnerHTML = SongNameVal;
  ArtistName.InnerHTML = ArtistName;

  

  CallBack(SongIcon, SongName, ArtistName)

}

function CreateObject(SongIcon, SongName, ArtistName){

  let SongObject = {

    ArtistName: `${SongName}`,
    SongIcon: `${SongIcon}`,
    ArtistName: `${ArtistName}`
    
  }
  
}