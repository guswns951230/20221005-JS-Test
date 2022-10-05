const loginForm = document.querySelector("#login-form");
const userInput = document.querySelector("#user-input");
const loginBtn = document.querySelector("#login-btn");
const userTitle = document.querySelector("#user-title");

loginForm.addEventListener("submit", onSubmitLogin);

function onSubmitLogin(e) {
  e.preventDefault();
  const user = userInput.value;
  console.log(user);

  userTitle.innerHTML = `${user}님, 반갑습니다.`;
  loginForm.classList.add("hidden");
  document.querySelector("#todo-form").classList.remove("hidden");
  document.querySelector("#list-container").classList.remove("hidden");
  document.querySelector("#list-counter").classList.remove("hidden");
}
