import { PlayListArrayOne, PlayListArrayTwo, PlayListArrayThree } from "../script.js";

export function CheckDataBase(){
  if (localStorage.length == 0){
    console.log("We could not find anything in our Database!")
    localStorage.clear();
  }

  else if (localStorage.length >= 1){
    console.log("We have found Poetential Playlists in the Database")
    let UserDecision = window.prompt("Do You Wish to restore these Playlist?");

    if (UserDecision == "yes"){
      console.log(localStorage);
      RestorePlayList();
    }
  }
}

function RestorePlayList(){
  

  // ! THIS CODE RESTORES PLAYLIST ONE!

  let ArrayBase = localStorage.getItem("PlayArrayone");
  console.log(ArrayBase);
  // let IndexOfComma = ArrayBase.indexOf(",");
  // let PlaylistName = ArrayBase.slice(IndexOfComma);
  // console.log(ArrayBase); 
  

  // let TempIconValue = ImageValue;
  // let TempNameValue = PlayListNameVall;

  // // ! CONST VARIABLES CREATE ELEMENTS FOR DOM / PLAYLIST

  // const NewPlayListContainer = document.createElement("div");
  // const NewPlayListIcon = document.createElement("img");
  // const NewPlayListName = document.createElement("h5");
  // const ViewPlaylistText = document.createElement("h6");
  // const ViewPlayListLink = document.createElement("a");

  // // * MODIFIES PLAYLIST VALUES

  // NewPlayListIcon.src = TempIconValue;
  // NewPlayListName.innerHTML = TempNameValue;
  // NewPlayListContainer.id = "PlaylistCSS";
  // ViewPlaylistText.innerHTML = "Click to View!";
  // ViewPlayListLink.href = "https://www.google.com";
  // ViewPlayListLink.setAttribute("EventTarget", "_blank");

  // // * DISPLAYS TO DOM

  // document.body.appendChild(NewPlayListContainer);
  // NewPlayListContainer.appendChild(NewPlayListIcon);
  // NewPlayListContainer.appendChild(NewPlayListName);
  // NewPlayListContainer.appendChild(ViewPlayListLink);
  // ViewPlayListLink.appendChild(ViewPlaylistText);

  
}

// function RestorePlayListTwo(){
//   let ArrayBase = localStorage.getItem("PlayArrayTwo");
//   let TempValue = ArrayBase.indexOf(",");
//   let ImageValue = ArrayBase.slice(0, TempValue);
//   let PlayListNameVall = ArrayBase.slice(TempValue + 1); 
  

//   let TempIconValue = ImageValue;
//   let TempNameValue = PlayListNameVall;

//   // ! CONST VARIABLES CREATE ELEMENTS FOR DOM / PLAYLIST

//   const NewPlayListContainer = document.createElement("div");
//   const NewPlayListIcon = document.createElement("img");
//   const NewPlayListName = document.createElement("h5");
//   const ViewPlaylistText = document.createElement("h6");
//   const ViewPlayListLink = document.createElement("a");

//   // * MODIFIES PLAYLIST VALUES

//   NewPlayListIcon.src = TempIconValue;
//   NewPlayListName.innerHTML = TempNameValue;
//   NewPlayListContainer.id = "PlaylistCSS";
//   ViewPlaylistText.innerHTML = "Click to View!";
//   ViewPlayListLink.href = "https://www.google.com";
//   ViewPlayListLink.setAttribute("EventTarget", "_blank");

//   // * DISPLAYS TO DOM

//   document.body.appendChild(NewPlayListContainer);
//   NewPlayListContainer.appendChild(NewPlayListIcon);
//   NewPlayListContainer.appendChild(NewPlayListName);
//   NewPlayListContainer.appendChild(ViewPlayListLink);
//   ViewPlayListLink.appendChild(ViewPlaylistText);
// }