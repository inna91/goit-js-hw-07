"use strict";
const inputRef = document.querySelector("#validation-input");

const validationHandler = () => {
  if (inputRef.value.length === +inputRef.dataset.length) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
};

inputRef.addEventListener("blur", validationHandler);
