//1.1 - 1.2
const div = document.createElement("div");
div.className = "block";
console.log(div);

//1.3
const b = document.createElement("b");
b.classList.add("red", "strong");
console.log(b);

//1.4
const ul = document.createElement("ul");
ul.classList.add("list");

const li = document.createElement("li");
li.textContent = "Привет мир!";
ul.append(li);

console.log(ul);

//1.5
const red = document.createElement("div");
const green = document.createElement("div");
const blue = document.createElement("div");

red.classList.add("red");
green.classList.add("green");
blue.classList.add("blue");

blue.textContent = "Я вложен";

red.append(green);
green.append(blue);

console.log(red);

//1.6
const div_1 = document.createElement("div");
const ul_1 = document.createElement("ul");
const li_1 = document.createElement("li");
const li_2 = document.createElement("li");

li_1.insertAdjacentHTML(
  "afterbegin",
  '<a href="https://instagram.com/intocode">Наш инстаграм</a>'
);
li_2.insertAdjacentHTML(
  "afterbegin",
  '<a href="https://intocode.ru">Наш сайт</a>'
);

div_1.append(ul_1);
ul_1.append(li_1, li_2);
console.log(div_1);

document.body.append(div_1);
//********************-------------------*************************//
