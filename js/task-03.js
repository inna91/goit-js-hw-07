"use strict";
const listRef = document.querySelector("#gallery");
listRef.classList.add("gallery");

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// const createImageTag = (image) => {
//   const itemRef = document.createElement("li");
//   const imageItem = document.createElement("img");
//   imageItem.setAttribute("src", image.url);
//   imageItem.setAttribute("alt", image.alt);
//   itemRef.appendChild(imageItem);
//   return itemRef;
// };

// const imageItems = images.map((image) => createImageTag(image));
// listRef.append(...imageItems);

/* With createDocumentFragment */

const fragment = document.createDocumentFragment();
const createImageTag = (image) => {
  const itemRef = document.createElement("li");
  const imageItem = document.createElement("img");
  imageItem.setAttribute("src", image.url);
  imageItem.setAttribute("alt", image.alt);
  imageItem.setAttribute("heigth", "350px");
  imageItem.setAttribute("width", "350px");
  itemRef.appendChild(imageItem);
  fragment.appendChild(itemRef);
  return fragment;
};

const imageItems = images.map((image) => createImageTag(image));
listRef.append(fragment);
