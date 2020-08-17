"use strict";
const inputRef = document.querySelector("#validation-input");
inputRef.addEventListener("blur", () => {
  const inputValue = event.target.value;
  // let validInput =
  //   event.target.value.length === 6
  //     ? inputRef.classList.add("valid")
  //     : inputRef.classList.add("invalid");
  if (event.target.value.length === 6) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
  }
});
