/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let dominios = [];
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  for (let index = 0; index < pronoun.length; index++) {
    for (let index2 = 0; index2 < adj.length; index2++) {
      for (let index3 = 0; index3 < noun.length; index3++) {
        dominios.push(pronoun[index] + adj[index2] + noun[index3]);
      }
    }
  }
  let list = document.getElementById("dominio");
  dominios.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });
  console.log("Hello Rigo from the console!");
};
