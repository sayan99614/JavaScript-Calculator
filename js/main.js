function POWER(){

}
function FACTORIAL(){
  
}


let cal_btn = [
  {
    name: "2nd",
    symbol: "2<sup>nd</sup>",
    formula: false,
    type: "key",
  },

  {
    name: "pi",
    symbol: "π",
    formula: "Math.PI",
    type: "number",
  },
  {
    name: "e",
    symbol: "e",
    formula: "Math.E",
    type: "number",
  },
  {
    name: "c",
    symbol: "C",
    formula: false,
    type: "key",
  },
  {
    name: "backspace",
    symbol: `<i class="fas fa-backspace"></i>`,
    formula: false,
    type: "key",
  },
  {
    name: "square",
    symbol: "x²",
    formula: POWER,
    type: "math_function",
  },
  {
    name: "1byx",
    symbol: "1/x",
    formula: "1/",
    type: "expression",
  },
  {
    name: "mod-x",
    symbol: "|x|",
    formula: "Math.abs",
    type: "math_function",
  },
  {
    name: "exp",
    symbol: "exp",
    formula: "Math.exp",
    type: "math_function",
  },
  {
    name: "mod",
    symbol: "mod",
    formula: false,
    type: "math_function",
  },
  {
    name: "square-root",
    symbol: "√",
    formula: "Math.sqrt",
    type: "math_function",
  },
  {
    name: "open-parenthesis",
    symbol: "(",
    formula: "(",
    type: "number",
  },
  {
    name: "close-parenthesis",
    symbol: ")",
    formula: ")",
    type: "number",
  },
  {
    name: "factorial",
    symbol: "n!",
    formula: FACTORIAL,
    type: "math_function",
  },
  {
    name: "division",
    symbol: "÷",
    formula: "/",
    type: "operator",
  },
  {
    name: "power",
    symbol: "x<sup>y</sup>",
    formula: POWER,
    type: "math_function",
  },
  {
    name: "7",
    symbol: 7,
    formula: 7,
    classname:"white",
    type: "number",
  },
  {
    name: "8",
    symbol: 8,
    formula: 8,
    classname:"white",
    type: "number",
  },
  {
    name: "9",
    symbol: 9,
    formula: 9,
    classname:"white",
    type: "number",
  },
  {
    name: "multiplication",
    symbol: "x",
    formula: "*",
    type: "operator",
  },
  {
    name: "tentopx",
    symbol: "10<sup>x</sup>",
    formula: POWER,
    type: "math_function",
  },
  {
    name: "4",
    symbol: 4,
    formula: 4,
    classname:"white",
    type: "number",
  },
  {
    name: "5",
    symbol: 5,
    formula: 5,
    classname:"white",
    type: "number",
  },
  {
    name: "6",
    symbol: 6,
    formula: 6,
    classname:"white",
    type: "number",
  },
  {
    name: "subtraction",
    symbol: "–",
    formula: "-",
    type: "operator",
  },
  {
    name: "log",
    symbol: "log",
    formula: "Math.log10",
    type: "math_function",
  },
  {
    name: "1",
    symbol: 1,
    formula: 1,
    classname:"white",
    type: "number",
  },
  {
    name: "2",
    symbol: 2,
    formula: 2,
    classname:"white",
    type: "number",
  },
  {
    name: "3",
    symbol: 3,
    formula: 3,
    classname:"white",
    type: "number",
  },
  {
    name: "addition",
    symbol: "+",
    formula: "+",
    type: "operator",
  },
  {
    name: "inverse",
    symbol: "In",
    formula: POWER,
    type: "math_function",
  },
  {
    name: "plusorminys",
    symbol: "+/-",
    formula: false,
    classname:"white",
    type: "key",
  },
  {
    name: "0",
    symbol: 0,
    formula: 0,
    classname:"white",
    type: "number",
  },
  {
    name: "comma",
    symbol: ".",
    formula: ".",
    classname:"white",
    type: "number",
  },
  {
    name: "calculate",
    symbol: "=",
    formula: "=",
    classname:"equal",
    type: "calculate",
  },
];

let container=document.querySelector(".grid-container");

cal_btn.forEach(button=>{
  container.innerHTML+=`<button class="box ${button.classname?`${button.classname}`:``}" id="${button.name}">${button.symbol}</button>`
})

// let btn_c = document.getElementById("c");
// let display = document.getElementById("display");
// btn_c.onclick = () => {
//   display.value = "0";
// };
// function dis(val) {
//   if (display.value.length === 1 && display.value === "0") {
//     display.value = "";
//   }
//   display.value += val;
// }
// function backspace(calc) {
//   let size = calc.display.value.length;
//   calc.display.value = calc.display.value.substring(0, size - 1);
// }
// function evaluate() {
//   console.log("val");
// }
// function calculate(calc) {
//   if (calc.display.value.includes("!")) {
//     size = calc.display.value.length;
//     n = Number(calc.display.value.substring(0, size - 1));
//     f = 1;
//     for (i = 2; i <= n; i++) {
//       f = f * i;
//     }
//     calc.display.value = f;
//   } else if (calc.display.value.includes("%")) {
//     size = calc.display.value.length;
//     n = Number(calc.display.value.substring(0, size - 1));
//     calc.display.value = n / 100;
//   } else {
//     calc.display.value = eval(calc.display.value);
//   }
// }
