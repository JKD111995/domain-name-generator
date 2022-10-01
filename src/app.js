/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#domain").innerHTML = generateDomain();
  });
};

let generateDomain = () => {
  let pronoun = ["the", "a", "for", "at", "in"];
  let adj = ["new", "bright", "dark", "fresh", "shiny", "great"];
  let noun = ["car", "nature", "food", "light", "window", "wand"];
  let dom = [".com", ".net", ".org", ".edu"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let adjIndex = Math.floor(Math.random() * adj.length);
  let nounIndex = Math.floor(Math.random() * noun.length);
  let domIndex = Math.floor(Math.random() * dom.length);

  return (
    pronoun[pronounIndex] + adj[adjIndex] + noun[nounIndex] + dom[domIndex]
  );
};
