import React, { Component } from "react";
import "./App.css";
import { Main } from "./components";

/*
Create react app to show a  grid of tv shows using the REST API
for the ajax call you can use any library you like I recommend axios
display the result in a grid using HTML flexbox

Links
https://www.tvmaze.com/api
https://www.npmjs.com/package/axios
https://css-tricks.com/snippets/css/a-guide-to-flexbox/
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Movies</h1>
        </header>
        <Main />
      </div>
    );
  }
}

//keren

export default App;
