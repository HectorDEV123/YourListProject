// ! The Import Statement imports the Stringified Version of the Array

// TODO: (Important): The Stringified Version of the Array has to parsed in order for the Array Value to be used.

// import { StringJSONPlayListArrayOne } from "../script";

export function CheckDataBase() {
  // * This IF Statements checks if the Local Database is Empty.

  if (localStorage.length == 0) {
    console.log("We could not find anything in our Database!");
    localStorage.clear();
  }

  // * This ELSE IF Statement Checks if Local Database has 1 or more values. If any values have been detected this means that the LocalStorage has Playlist Data that can be restored
  else if (localStorage.length >= 1) {
    console.log("We have found Poetential Playlists in the Database");
    let UserDecision = window.prompt("Do You Wish to restore these Playlist?");

    if (UserDecision == "yes") {
    }
  }
}
