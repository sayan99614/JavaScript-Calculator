console.log("working");
let btn_c = document.getElementById("c");
let display = document.getElementById("display");
btn_c.onclick = () => {
  display.value = "0";
};
function dis(val) {
  if (display.value.length === 1 && display.value === "0") {
    display.value = "";
  }
  display.value += val;
}
function backspace(calc) {
  let size = calc.display.value.length;
  calc.display.value = calc.display.value.substring(0, size - 1);
}
function evaluate() {
  console.log("val");
}
function calculate(calc) {
  if (calc.display.value.includes("!")) {
    size = calc.display.value.length;
    n = Number(calc.display.value.substring(0, size - 1));
    f = 1;
    for (i = 2; i <= n; i++) {
      f = f * i;
    }
    calc.display.value = f;
  } else if (calc.display.value.includes("%")) {
    size = calc.display.value.length;
    n = Number(calc.display.value.substring(0, size - 1));
    calc.display.value = n / 100;
  } else {
    calc.display.value = eval(calc.display.value);
  }
}
