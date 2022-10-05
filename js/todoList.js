const todoForm = document.querySelector("#todo-form");
const inputText = document.querySelector("#input-text");
const listContainer = document.querySelector("#list-container");
const listCounter = document.querySelector("#list-counter");

todoForm.addEventListener("submit", onSubmitTodo);

let count = 0;

function onSubmitTodo(e) {
  e.preventDefault();
  const todo = inputText.value;
  console.log(todo);

  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const textNode = document.createTextNode(todo);
  const deleteBtn = document.createElement("button");

  inputText.value = "";
  inputText.focus();
  deleteBtn.innerHTML = "X";

  li.appendChild(checkbox);
  li.appendChild(textNode);
  li.appendChild(deleteBtn);
  listContainer.append(li);

  checkbox.addEventListener("click", todoCheck);
  deleteBtn.addEventListener("click", todoDelete);
}

function todoCheck(e) {
  const li = e.target.parentNode;
  if (e.target.checked) {
    li.style.color = "lightGray";
    count++;
  } else {
    li.style.color = "white";
    count--;
  }
  console.log(count);
  countList();
}

function todoDelete(e) {
  const li = e.target.parentNode;
  const checkbox = li.firstChild;
  li.remove();
  if (checkbox.checked && count > 0) {
    count--;
    console.log(count);
    countList();
  }
}

function countList() {
  listCounter.innerHTML = `오늘 완료한 할 일 : ${count}개`;
}
