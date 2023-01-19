
let screen = document.querySelector(".screen");

let btn = document.querySelectorAll("button");
let screenValue = "";

for (item of btn) {
  item.addEventListener("click", (e) => {
    let btnText = e.target.innerText;
    console.log("button click", btnText);

    if (btnText == "X") {
      btnText = "*";
      screenValue += btnText;
      screen.textContent = screenValue;
    } else if (btnText == "AC") {
      screenValue = "";
      screen.textContent = screenValue;
    } else if (btnText == "=") {
      screen.textContent = eval(screenValue);
    } else {
      screenValue += btnText;
      screen.textContent = screenValue;
    }
  });
}