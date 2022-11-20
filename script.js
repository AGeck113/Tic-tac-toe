function choose1() {
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
function choose2() {
  if (count % 2 == 0) {
    centerTop.style.color = "red";
    centerTop.innerHTML = "Player 1";
    count++;
  } else {
    centerTop.style.color = "blue";
    centerTop.innerHTML = "Player 2";
    count++;
  }
}

var count = 0;

let testButton1 = document.querySelector("#b1");

testButton1.addEventListener("click", choose1);

let testButton2 = document.querySelector("#b2");

testButton2.addEventListener("click", choose2);
