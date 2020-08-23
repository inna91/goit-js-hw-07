"use strict";
const counterRef = document.querySelector("#counter");
const buttonIncrementRef = document.querySelector(
  "button[data-action='increment']"
);
const buttonDecrementRef = document.querySelector(
  "button[data-action='decrement']"
);
const valueRef = document.getElementById("value");

let value;

const valueIncrement = () => {
  value += 1;
  valueRef.textContent = value;
};

const valueDecrement = () => {
  value -= 1;
  valueRef.textContent = value;
};

buttonIncrementRef.addEventListener("click", valueIncrement);

buttonDecrementRef.addEventListener("click", valueDecrement);
