// * Imports the DBINIT FILE TO USE
import { CheckDataBase } from "./LocalDb/DBINIT.js";

// * DOM Variables
const PlayListNameInput = document.getElementById("PlayListNameInput");
const PlayListIconInput = document.getElementById("PlayListIconInput");
const CreateBtn = document.getElementById("CreatePlayBtn");

// * Each Playlist is Given an ID from 3-1, this variable gives it
let PlayListID = 4;

// ! Since Arrays cannot be passed in as its normal state the Playlist Data will be saved onto the "Non" Variables till conversion has happened

let NonJSONPlayListArrayOne = [];
let NonJSONPlayListArrayTwo = [];
let NonJSONPlayListArrayThree = [];

// ! These are the converted arrays name, once the data in NonJSON has been stringified it will be passed to this array before being processed to Local Database.

let StringJSONPlayListArrayOne;

// * The function below executes the Database checker to see if any Playlist exists before calling a decsion
CheckDataBase();

function OnCreateClick() {
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

  // * The Constant Variables create the Playlist Container and its content.

  const NewPlayListContainer = document.createElement("div");
  const NewPlayListIcon = document.createElement("img");
  const NewPlayListName = document.createElement("h5");
  const ViewPlaylistText = document.createElement("h6");
  const ViewPlayListLink = document.createElement("a");

  // * Once Playlist Container has been made the code belows starts modifiying its Data.

  NewPlayListIcon.src = TempIconValue;
  NewPlayListName.innerHTML = TempNameValue;
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

  // * SAVE TO DATABASE (This Code Begins the process of saving data to Database & Moving it onto Global Scope)

  switch (PlayListID) {
    case 3:
      NewPlayListContainer.className = "PlayListOne";
      NonJSONPlayListArrayOne.push(TempIconValue);
      NonJSONPlayListArrayOne.push(TempNameValue);
      StringJSONPlayListArrayOne = JSON.stringify(StringJSONPlayListArrayOne);
      localStorage.setItem("PlayListOne", StringJSONPlayListArrayOne);

      break;
  }
}

// * This Exported the JSON String Arrays to move to Local Database Processing
export { StringJSONPlayListArrayOne };

CreateBtn.addEventListener("click", OnCreateClick);

document.getElementById("str").onclick = function () {
  localStorage.clear();
  console.warn("Cleared!");
};
