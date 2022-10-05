const backgroundImg = document.querySelector("body");
const images = [
  "back0.jpg",
  "back1.jpg",
  "back2.jpg",
  "back3.jpg",
  "back4.jpg",
  "back5.jpg",
];

const randomNum = Math.floor(Math.random() * images.length);
const chooseImg = images[randomNum];

backgroundImg.style.background = `url(./img/${chooseImg})`;
