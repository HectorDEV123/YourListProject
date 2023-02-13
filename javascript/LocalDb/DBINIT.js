import { PlayListArrayOne, PlayListArrayTwo, PlayListArrayThree } from "../script.js";

<<<<<<< HEAD
import {
  StringJSONPlayListArrayOne,
  StringJSONPlayListArrayTwo,
} from "../script.js";

import { NonJSONSongIconArray } from "../PlayOne.js"

// TODO: (Important): The Stringified Version of the Array has to parsed in order for the Array Value to be used.

// import { StringJSONPlayListArrayOne } from "../script";

export function CheckDataBase() {
  // * This IF Statements checks if the Local Database is Empty.

  if (localStorage.length == 0) {
    console.log("We could not find anything in our Database!");
=======
export function CheckDataBase(){
  if (localStorage.length == 0){
    console.log("We could not find anything in our Database!")
>>>>>>> parent of c4ebd38 (Updated)
    localStorage.clear();
  }

  else if (localStorage.length >= 1){
    console.log("We have found Poetential Playlists in the Database")
    let UserDecision = window.prompt("Do You Wish to restore these Playlist?");

<<<<<<< HEAD
    if (UserDecision == "yes") {
      RestorePlayListOne();
      RestorePlayListTwo();
      RestorePlayListThree();
=======
    if (UserDecision == "yes"){
      console.log(localStorage);
      RestorePlayList();
>>>>>>> parent of c4ebd38 (Updated)
    }
  }
}

<<<<<<< HEAD
function RestorePlayListOne() {
  const StringArrayFromStorage = localStorage.getItem("PlayListOne");
  let ParsedArray = JSON.parse(StringArrayFromStorage);

  let PlayListImg = ParsedArray[0];
  let PlayListName = ParsedArray[1];

  // * The Constant Variables create the Playlist Container and its content.

  const NewPlayListContainer = document.createElement("div");
  const NewPlayListIcon = document.createElement("img");
  const NewPlayListName = document.createElement("h5");
  const ViewPlaylistText = document.createElement("h6");
  const ViewPlayListLink = document.createElement("a");

  // * Once Playlist Container has been made the code belows starts modifiying its Data.

  NewPlayListIcon.src = PlayListImg;
  NewPlayListName.innerHTML = PlayListName;
  NewPlayListContainer.id = "PlaylistCSS";
  ViewPlaylistText.innerHTML = "Click to View!";
  ViewPlayListLink.href = "../html/PlayOne.html";
  ViewPlayListLink.setAttribute("EventTarget", "_blank");

  // * The Code Below Displays the PlayList to the Document Model

  document.body.appendChild(NewPlayListContainer);
  NewPlayListContainer.appendChild(NewPlayListIcon);
  NewPlayListContainer.appendChild(NewPlayListName);
  NewPlayListContainer.appendChild(ViewPlayListLink);
  ViewPlayListLink.appendChild(ViewPlaylistText);

  RestoreSongsTOPlayList();

  function RestoreSongsTOPlayList(){

    const StringArrayFromStorage = localStorage.getItem("OneSongIcons");
    let ParsedArray = JSON.parse(StringArrayFromStorage);

    console.log(ParsedArray);
  }
}

function RestorePlayListTwo() {
  const StringArrayFromStorage = localStorage.getItem("PlayListTwo");
  let ParsedArray = JSON.parse(StringArrayFromStorage);

  let PlayListImg = ParsedArray[0];
  let PlayListName = ParsedArray[1];

  // * The Constant Variables create the Playlist Container and its content.

  const NewPlayListContainer = document.createElement("div");
  const NewPlayListIcon = document.createElement("img");
  const NewPlayListName = document.createElement("h5");
  const ViewPlaylistText = document.createElement("h6");
  const ViewPlayListLink = document.createElement("a");

  // * Once Playlist Container has been made the code belows starts modifiying its Data.

  NewPlayListIcon.src = PlayListImg;
  NewPlayListName.innerHTML = PlayListName;
  NewPlayListContainer.id = "PlaylistCSS";
  ViewPlaylistText.innerHTML = "Click to View!";
  ViewPlayListLink.href = "../html/PlayOne.html";
  ViewPlayListLink.setAttribute("EventTarget", "_blank");

  // * The Code Below Displays the PlayList to the Document Model

  document.body.appendChild(NewPlayListContainer);
  NewPlayListContainer.appendChild(NewPlayListIcon);
  NewPlayListContainer.appendChild(NewPlayListName);
  NewPlayListContainer.appendChild(ViewPlayListLink);
  ViewPlayListLink.appendChild(ViewPlaylistText);
}

function RestorePlayListThree() {
  const StringArrayFromStorage = localStorage.getItem("PlayListThree");
  let ParsedArray = JSON.parse(StringArrayFromStorage);

  let PlayListImg = ParsedArray[0];
  let PlayListName = ParsedArray[1];

  // * The Constant Variables create the Playlist Container and its content.

  const NewPlayListContainer = document.createElement("div");
  const NewPlayListIcon = document.createElement("img");
  const NewPlayListName = document.createElement("h5");
  const ViewPlaylistText = document.createElement("h6");
  const ViewPlayListLink = document.createElement("a");

  // * Once Playlist Container has been made the code belows starts modifiying its Data.

  NewPlayListIcon.src = PlayListImg;
  NewPlayListName.innerHTML = PlayListName;
  NewPlayListContainer.id = "PlaylistCSS";
  ViewPlaylistText.innerHTML = "Click to View!";
  ViewPlayListLink.href = "../html/PlayOne.html";
  ViewPlayListLink.setAttribute("EventTarget", "_blank");

  // * The Code Below Displays the PlayList to the Document Model

  document.body.appendChild(NewPlayListContainer);
  NewPlayListContainer.appendChild(NewPlayListIcon);
  NewPlayListContainer.appendChild(NewPlayListName);
  NewPlayListContainer.appendChild(ViewPlayListLink);
  ViewPlayListLink.appendChild(ViewPlaylistText);
}
=======
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
>>>>>>> parent of c4ebd38 (Updated)
