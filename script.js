function choose() {
  if (count % 2 == 0) {
    leftTop.style.color = "red";
    leftTop.innerHTML = "Player 1";
    count++;
  } else {
    leftTop.style.color = "blue";
    leftTop.innerHTML = "Player 2";
    count++;
  }
}
var count = 3;

let testButton1 = document.querySelector("#b1");

testButton1.addEventListener("click", choose);
