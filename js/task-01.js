"use stcrict";
const categoriesListRef = document.querySelector("#categories");
const categoriesItemsRef = document.querySelectorAll(".item");
console.log(`В списке ${categoriesItemsRef.length} категории.`);

// 2 вариант
// const count = document.getElementsByClassName("item").length;
// console.log(`В списке ${count} категории.`);

const countOfItems = categoriesItemsRef.forEach((element) =>
  console.log(
    `Категория: ${element.querySelector("h2").textContent}
  Количество элементов: ${element.querySelectorAll("li").length}`
  )
);

// const list = Array.from(categoriesListRef.children);
// // for (let li of list) {
// //   let category = li.firstElementChild.textContent;
// //   let countElem = li.lastElementChild.children.length;
// //   console.log(`Категория: ${category}`);
// //   console.log(`Количество элементов: ${countElem}`);
// // }
