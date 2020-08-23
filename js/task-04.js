"use strict";
const counterRef = document.querySelector("#counter");
const buttonIncrementRef = document.querySelector(
  "button[data-action='increment']"
);
const buttonDecrementRef = document.querySelector(
  "button[data-action='decrement']"
);
const valueRef = document.getElementById("value");

let counterValue = 0;

const valueIncrement = () => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};

const valueDecrement = () => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};

buttonIncrementRef.addEventListener("click", valueIncrement);

buttonDecrementRef.addEventListener("click", valueDecrement);
