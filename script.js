function choose() {
  lefttop.style.color = "red";
  lefttop.innerHTML = "Choosen";
}

let testButton = document.querySelector("#test");

testButton.addEventListener("click", choose);
