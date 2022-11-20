function select1() {
  if (count % 2 == 0) {
    leftTop.style.color = "red";
    leftTop.innerHTML = "X";
    count++;
  } else {
    leftTop.style.color = "blue";
    leftTop.innerHTML = "o";
    count++;
  }
}

function select2() {
  if (count % 2 == 0) {
    centerTop.style.color = "red";
    centerTop.innerHTML = "X";
    count++;
  } else {
    centerTop.style.color = "blue";
    centerTop.innerHTML = "o";
    count++;
  }
}

function select3() {
  if (count % 2 == 0) {
    rightTop.style.color = "red";
    rightTop.innerHTML = "X";
    count++;
  } else {
    rightTop.style.color = "blue";
    rightTop.innerHTML = "o";
    count++;
  }
}

function select4() {
  if (count % 2 == 0) {
    leftCenter.style.color = "red";
    leftCenter.innerHTML = "X";
    count++;
  } else {
    leftCenter.style.color = "blue";
    leftCenter.innerHTML = "o";
    count++;
  }
}
function select5() {
  if (count % 2 == 0) {
    centerCenter.style.color = "red";
    centerCenter.innerHTML = "X";
    count++;
  } else {
    centerCenter.style.color = "blue";
    centerCenter.innerHTML = "o";
    count++;
  }
}
function select6() {
  if (count % 2 == 0) {
    rightCenter.style.color = "red";
    rightCenter.innerHTML = "X";
    count++;
  } else {
    rightCenter.style.color = "blue";
    rightCenter.innerHTML = "o";
    count++;
  }
}
function select7() {
  if (count % 2 == 0) {
    leftBottom.style.color = "red";
    leftBottom.innerHTML = "X";
    count++;
  } else {
    leftBottom.style.color = "blue";
    leftBottom.innerHTML = "o";
    count++;
  }
}
function select8() {
  if (count % 2 == 0) {
    centerBottom.style.color = "red";
    centerBottom.innerHTML = "X";
    count++;
  } else {
    centerBottom.style.color = "blue";
    centerBottom.innerHTML = "o";
    count++;
  }
}
function select9() {
  if (count % 2 == 0) {
    rightBottom.style.color = "red";
    rightBottom.innerHTML = "X";
    count++;
  } else {
    rightBottom.style.color = "blue";
    rightBottom.innerHTML = "o";
    count++;
  }
}
var count = 0;

let selectButton1 = document.querySelector("#b1");
selectButton1.addEventListener("click", select1);

let selectButton2 = document.querySelector("#b2");
selectButton2.addEventListener("click", select2);

let selectButton3 = document.querySelector("#b3");
selectButton3.addEventListener("click", select3);

let selectButton4 = document.querySelector("#b4");
selectButton4.addEventListener("click", select4);

let selectButton5 = document.querySelector("#b5");
selectButton5.addEventListener("click", select5);

let selectButton6 = document.querySelector("#b6");
selectButton6.addEventListener("click", select6);

let selectButton7 = document.querySelector("#b7");
selectButton7.addEventListener("click", select7);

let selectButton8 = document.querySelector("#b8");
selectButton8.addEventListener("click", select8);

let selectButton9 = document.querySelector("#b9");
selectButton9.addEventListener("click", select9);
