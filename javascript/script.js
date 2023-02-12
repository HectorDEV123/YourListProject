// DOM Variables
import { CheckDataBase } from "./LocalDb/DBINIT.js";

const PlayListNameInput = document.getElementById("PlayListNameInput");
const PlayListIconInput = document.getElementById("PlayListIconInput");
const CreateBtn = document.getElementById("CreatePlayBtn");

let PlayListID = 4;


let PlayListArrayOne = [];
let PlayListArrayTwo = [""];
let PlayListArrayThree = [""];


CheckDataBase();

function OnCreateClick() {
  // ! THIS FUNCTION DECREMENTS PLAYLIST ID TO MAKE SURE THE MAXIUMUM IS 3!

  switch (PlayListID) {
    case 4:
      PlayListID -= 1;
      CreatePlayList();
      console.log("Playlist Created");
      break;

    case 3:
      PlayListID -= 1;
      CreatePlayList();
      console.log("Playlist Created");
      break;

    case 2:
      PlayListID -= 1;
      CreatePlayList();
      console.log("Playlist Created");
      break;

    default:
      console.error("Maximum Amount of Playlist Reached!");
      break;
  }
}

function CreatePlayList() {
  let PlayListClassName;
  let TempIconValue = PlayListIconInput.value;
  let TempNameValue = PlayListNameInput.value;

  // ! CONST VARIABLES CREATE ELEMENTS FOR DOM / PLAYLIST

  const NewPlayListContainer = document.createElement("div");
  const NewPlayListIcon = document.createElement("img");
  const NewPlayListName = document.createElement("h5");
  const ViewPlaylistText = document.createElement("h6");
  const ViewPlayListLink = document.createElement("a");

  // * MODIFIES PLAYLIST VALUES

  NewPlayListIcon.src = TempIconValue;
  NewPlayListName.innerHTML = TempNameValue;
  NewPlayListContainer.id = "PlaylistCSS";
  ViewPlaylistText.innerHTML = "Click to View!";
  ViewPlayListLink.href = "../html/PlayOne.html";
  ViewPlayListLink.setAttribute("EventTarget", "_blank");

  // * DISPLAYS TO DOM

  document.body.appendChild(NewPlayListContainer);
  NewPlayListContainer.appendChild(NewPlayListIcon);
  NewPlayListContainer.appendChild(NewPlayListName);
  NewPlayListContainer.appendChild(ViewPlayListLink);
  ViewPlayListLink.appendChild(ViewPlaylistText);

  // * SAVE TO DATABASE (This Code Begins the process of saving data to Database & Moving it onto Global Scope)

  switch (PlayListID) {
    case 3:
      NewPlayListContainer.className = "PlayListOne";
      PlayListArrayOne.push(TempIconValue);
      PlayListArrayOne.push(TempNameValue);
      localStorage.setItem("PlayArrayone", PlayListArrayOne);
      // console.log(PlayListArrayOne);
      break;

    case 2:
      NewPlayListContainer.className = "PlayListTwo";
      PlayListArrayTwo.push(TempIconValue);
      PlayListArrayTwo.push(TempNameValue);
      localStorage.setItem("PlayArrayTwo", PlayListArrayOne);
      break;

    case 1:
      NewPlayListContainer.className = "PlayListThree";
      PlayListArrayThree.push(TempIconValue);
      PlayListArrayThree.push(TempNameValue);
      localStorage.setItem("PlayArrayThree", PlayListArrayThree);
      break;
  }

  
  
}


export { PlayListArrayOne, PlayListArrayTwo, PlayListArrayThree };

CreateBtn.addEventListener("click", OnCreateClick);

document.getElementById("str").onclick = function () {
  localStorage.clear();
  console.warn("Cleared!");
};

