const h2 = document.querySelector("h2");
console.log(h2);

// h2.style.color = "red";
// h2.style.backgroundColor = "pink";
// h2.style.fontSize = "12px";

const usernameInput = document.querySelector("#login-usuario");
console.log(usernameInput);

usernameInput.classList.add("correct");

const error_text = document.querySelectorAll(".error-text");
console.log(error_text);

error_text[0].classList.remove("visible");
error_text[1].classList.add("visible");

// login

const loginInput = document.querySelector("#login-senha");
console.log(loginInput);

loginInput.classList.add("error");

// Trabalho em grupo:
// Everson Ferreira, Raylany Shimizu, Jose Lucas, Evanoi, Flavia.
