function choose() {
  if (count % 2 == 0) {
    lefttop.style.color = "red";
    lefttop.innerHTML = "Player 1";
    count++;
  } else {
    lefttop.style.color = "blue";
    lefttop.innerHTML = "Player 2";
    count++;
  }
}
var count = 3;

let testButton = document.querySelector("#test");

testButton.addEventListener("click", choose);
