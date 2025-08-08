const colorSwitcherButton = document.querySelector("#colorSwitcherButton");
const body = document.querySelector("body");
const textField = document.querySelector("#textField");

colorSwitcherButton.addEventListener("input", function (evento) {
  body.style.backgroundColor = evento.target.value;
});

textField.addEventListener("change", function (evento) {
  body.style.backgroundColor = evento.target.value;
});
