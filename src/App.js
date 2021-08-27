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
      ReactDOM.render(
        <List param={objekat} />,
        document.getElementById("prikaz")
      );
      // console.log(objekat[0]);
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

// function List(props) {
//   // let proba = props.word;
//   console.log(props.param.word);
//   return (
//     <div>
//       {/* <p>{props.param.word}</p>
//       <p>{props.param.phonetics[0].text}</p>
//       <a href={props.param.phonetics[0].audio}>Audio</a> */}
//       <p>
//         <strong>{props.param.word}</strong> -/{props.param.phonetics[0].text}/{" "}
//         <span>
//           <a href={props.param.phonetics[0].audio}>Audio</a>{" "}
//         </span>
//       </p>
//     </div>
//   );
// }

export default App;
