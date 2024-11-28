import React from "react";
import "./App.css";
import Header from "./component/header/Header.jsx";
import Nav from "./component/Navigation/Nav.jsx";
import Body from "./component/Body/Body.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Body />
    </div>
  );
}

export default App;
