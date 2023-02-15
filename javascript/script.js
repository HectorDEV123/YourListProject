// DOM Variables
import { CheckDataBase } from "./LocalDb/DBINIT.js";


const PlayListNameInput = document.getElementById("PlayListNameInput");
const PlayListIconInput = document.getElementById("PlayListIconInput");
const CreateBtn = document.getElementById("CreatePlayBtn");

let PlayListID = 4;

let NonJSONPlayListArrayOne = [];
let NonJSONPlayListArrayTwo = [];
let NonJSONPlayListArrayThree = [];

let StringJSONPlayListArrayOne = [];
let StringJSONPlayListArrayTwo = []; 
let StringJSONPlayListArrayThree = [];

let x = 4;
// * The function below executes the Database checker to see if any Playlist exists before calling a decsion
CheckDataBase();



function OnCreateClick(param) {
  // ! This Function sets the maximum amount of Playlists to THREE!

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
  NewPlayListContainer.className = "Container"; 

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
      NonJSONPlayListArrayOne.push(TempIconValue);
      NonJSONPlayListArrayOne.push(TempNameValue);
      StringJSONPlayListArrayOne = JSON.stringify(NonJSONPlayListArrayOne);
      localStorage.setItem("PlayListOne", StringJSONPlayListArrayOne);
      break;

      case 2:
        NewPlayListContainer.className = "PlayListTwo";
        NonJSONPlayListArrayTwo.push(TempIconValue);
        NonJSONPlayListArrayTwo.push(TempNameValue);
        StringJSONPlayListArrayTwo = JSON.stringify(NonJSONPlayListArrayTwo);
        localStorage.setItem("PlayListTwo", StringJSONPlayListArrayTwo);
        break;

        case 1:
          NewPlayListContainer.className = "PlayListThree";
          NonJSONPlayListArrayThree.push(TempIconValue);
          NonJSONPlayListArrayThree.push(TempNameValue);
          StringJSONPlayListArrayThree = JSON.stringify(NonJSONPlayListArrayThree);
          localStorage.setItem("PlayListThree", StringJSONPlayListArrayThree);
          console.log(StringJSONPlayListArrayThree);
          break;
  }
}

// * This Exported the JSON String Arrays to move to Local Database Processing
export { StringJSONPlayListArrayOne, StringJSONPlayListArrayTwo, StringJSONPlayListArrayThree };

CreateBtn.addEventListener("click", OnCreateClick);

document.getElementById("str").onclick = function () {
  localStorage.clear();
  console.warn("Cleared!");
};
