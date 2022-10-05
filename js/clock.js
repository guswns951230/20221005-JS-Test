const clock = document.querySelector("#clock");

function getTime() {
  let date = new Date();
  let hours = String(date.getHours()).padStart(2, "0");
  let min = String(date.getMinutes()).padStart(2, "0");
  let sec = String(date.getSeconds()).padStart(2, "0");

  clock.innerHTML = `${hours} : ${min} : ${sec}`;
}
getTime();

setInterval(getTime, 1000);
