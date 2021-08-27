import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import List from "./List";

const load = () => {
  let name = document.getElementById("verzijaA").value;
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${name}`)
    .then((response) => response.json())
    .then((data) => {
      let objekat = data[0];
      // console.log(objekat);
      // let objekat = JSON.stringify(data);
      // ReactDOM.render(objekat, document.getElementById("prikaz"));

      let component;
      if (objekat === undefined) {
        component = <div> Trazena rec ne postoji u recniku</div>;
      } else {
        component = <List param={objekat} />;
      }

      ReactDOM.render(
        // <List param={objekat} />,
        component,
        document.getElementById("prikaz")
      );
      console.log(objekat);
    });
};

function App() {
  return (
    <div className="App">
      <label for="verzijaA"></label>
      <input type="text" id="verzijaA"></input>

      <button onClick={load}> Nadji </button>
      <div id="prikaz"></div>
    </div>
  );
}

export default App;
