"use strict";
const renderRef = document.querySelector("[data-action = render]");
const destroyRef = document.querySelector("[data-action = destroy]");
const boxesRef = document.getElementById("boxes");

renderRef.addEventListener("click", renderAmountHandler);
destroyRef.addEventListener("click", destroyCollectionHandler);

function renderAmountHandler() {
  const amount = document.querySelector("#controls input").value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let startSize = 30;
  const newDiv = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    let nextDivSize = startSize + i * 10;
    const div = document.createElement("div");
    div.style.cssText = `width: ${nextDivSize}px; height: ${nextDivSize}px; background-color: rgba( ${randomHandler()} , ${randomHandler()} , ${randomHandler()} )`;
    newDiv.appendChild(div);
  }
  boxesRef.appendChild(newDiv);
}

function destroyCollectionHandler() {
  boxesRef.innerHTML = "";
}

function randomHandler() {
  return Math.floor(Math.random() * 256);
}
