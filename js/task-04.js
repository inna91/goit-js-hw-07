"use strict";
const counterRef = document.querySelector("#counter");
const buttonIncrementRef = document.querySelector(
  "button[data-action='increment']"
);
const buttonDecrementRef = document.querySelector(
  "button[data-action='decrement']"
);
const valueRef = document.getElementById("value");

const valueIncrement = () => {
  ++valueRef.textContent;
};

const valueDecrement = () => {
  --valueRef.textContent;
};

buttonIncrementRef.addEventListener("click", valueIncrement);

buttonDecrementRef.addEventListener("click", valueDecrement);
