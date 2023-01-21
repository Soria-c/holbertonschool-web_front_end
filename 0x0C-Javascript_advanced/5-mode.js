"use strict";

function changeMode(size, weigth, transform, background, color) {
  return () => {
    document.body.style.fontSize = size+"px";
    document.body.style.fontWeight = weigth;
    document.body.style.textTransform = transform;
    document.body.style.background = background;
    document.body.style.color = color;
  };
}

function main() {
    document.body.innerText = "";
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    let p = document.createElement("p");
    
    p.innerText = "Welcome Holberton!";
    
    let spookyButton = document.createElement("button");
    let darkModeButton = document.createElement("button");
    let screamButton = document.createElement("button");

    spookyButton.onclick = spooky;
    spookyButton.innerText = "Spooky";
    darkModeButton.onclick = darkMode;
    darkModeButton.innerText = "Dark Mode";
    screamButton.onclick = screamMode;
    screamButton.innerText = "Scream mode"

    document.body.append(p, spookyButton, darkModeButton, screamButton);
}
