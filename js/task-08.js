"use strict";
const renderRef = document.querySelector("[data-action = render]");
const destroyRef = document.querySelector("[data-action = destroy]");
const boxesRef = document.getElementById("boxes");

let startSize = 30;

renderRef.addEventListener("click", renderAmountHandler);
destroyRef.addEventListener("click", destroyCollectionHandler);

function createBoxes(amount) {
  const newDiv = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const size = startSize + i * 10;
    const box = createDiv(size);
    newDiv.appendChild(box);
  }
  boxesRef.appendChild(newDiv);
}

const createDiv = (size) => {
  const div = document.createElement("div");
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;
  div.style.backgroundColor = randomHandler();

  return div;
};

function renderAmountHandler() {
  const amount = document.querySelector("#controls input").value;
  createBoxes(amount);
}

function destroyCollectionHandler() {
  boxesRef.innerHTML = "";
}

function randomHandler() {
  const color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
  return "#" + color;
}
