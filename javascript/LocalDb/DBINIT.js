// ! The Import Statement imports the Stringified Version of the Array

import { StringJSONPlayListArrayOne } from "../script.js";

// TODO: (Important): The Stringified Version of the Array has to parsed in order for the Array Value to be used.

// import { StringJSONPlayListArrayOne } from "../script";

export function CheckDataBase() {
  // * This IF Statements checks if the Local Database is Empty.

  if (localStorage.length == 0) {
    console.log("We could not find anything in our Database!");
    localStorage.clear();
  }

  // * This ELSE IF Statement Checks if Local Database has 1 or more values. If any values have been detected this means that the LocalStorage has Playlist Data that can be restored
  else if (
    localStorage.length >= 1 &&
    performance.navigation.type == performance.navigation.TYPE_RELOAD
  ) {
    RestorePlayListOne();
    RestorePlayListTwo();
    RestorePlayListThree();
    
  }
}

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

  
}




function RestorePlayListTwo() {
  const StringArrayFromStorage = localStorage.getItem("PlayListTwo");
  let ParsedArray = JSON.parse(StringArrayFromStorage);

  console.log(ParsedArray);
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

