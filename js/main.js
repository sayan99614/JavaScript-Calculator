let container = document.querySelector(".grid-container");
let trigonometry = document.querySelector(".trigonometry");
let func = document.querySelector(".function");
let display = document.getElementById("display");
const operators = ["+", "-", "*", "/"];
const POWER = "POWER(",
  FACTORIAL = "FACTORIAL";
let data = {
  operation: [],
  formula: [],
};
var pointer = data.formula.length;
let trigo_btn = [
  {
    name: "cos",
    symbol: "cos",
    formula: "trigo(Math.cos,",
    type: "trigo_function",
  },
  {
    name: "sin",
    symbol: "sin",
    formula: "trigo(Math.sin,",
    type: "trigo_function",
  },
  {
    name: "tan",
    symbol: "tan",
    formula: "trigo(Math.tan,",
    type: "trigo_function",
  },
  {
    name: "acos",
    symbol: "acos",
    formula: "inv_trigo(Math.acos,",
    type: "trigo_function",
  },
  {
    name: "asin",
    symbol: "asin",
    formula: "inv_trigo(Math.asin,",
    type: "trigo_function",
  },
  {
    name: "atan",
    symbol: "atan",
    formula: "inv_trigo(Math.atan,",
    type: "trigo_function",
  },
];
let fun_btn = [
  {
    name: "mod_x_fun",
    symbol: "|x|",
    formula: "Math.abs",
    type: "math_function",
  },
  {
    name: "ceil_x",
    symbol: "⌈x⌉",
    formula: "Math.ceil",
    type: "math_function",
  },
  {
    name: "floor_x",
    symbol: "⌊x⌋",
    formula: "Math.floor",
    type: "math_function",
  },
  {
    name: "random",
    symbol: "rand",
    formula: "Math.random",
    type: "math_function",
  },
  {
    name: "dms",
    symbol: "dms",
    formula: "",
    type: "math_function",
  },
  {
    name: "deg",
    symbol: "deg",
    formula: "",
    type: "math_function",
  },
];
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
    name: "clear",
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
    formula: "1/(",
    type: "math_function",
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
    formula: "%",
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
    classname: "white",
    type: "number",
  },
  {
    name: "8",
    symbol: 8,
    formula: 8,
    classname: "white",
    type: "number",
  },
  {
    name: "9",
    symbol: 9,
    formula: 9,
    classname: "white",
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
    classname: "white",
    type: "number",
  },
  {
    name: "5",
    symbol: 5,
    formula: 5,
    classname: "white",
    type: "number",
  },
  {
    name: "6",
    symbol: 6,
    formula: 6,
    classname: "white",
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
    classname: "white",
    type: "number",
  },
  {
    name: "2",
    symbol: 2,
    formula: 2,
    classname: "white",
    type: "number",
  },
  {
    name: "3",
    symbol: 3,
    formula: 3,
    classname: "white",
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
    classname: "white",
    type: "key",
  },
  {
    name: "0",
    symbol: 0,
    formula: 0,
    classname: "white",
    type: "number",
  },
  {
    name: "comma",
    symbol: ".",
    formula: ".",
    classname: "white",
    type: "number",
  },
  {
    name: "calculate",
    symbol: "=",
    formula: "=",
    classname: "equal",
    type: "calculate",
  },
];

cal_btn.forEach((button) => {
  container.innerHTML += `<button class="box ${
    button.classname ? `${button.classname}` : ``
  }" id="${button.name}">${button.symbol}</button>`;
});

trigo_btn.forEach((button) => {
  document.querySelector(
    ".tri-list"
  ).innerHTML += `<button class="box" id="${button.name}">${button.symbol}</button>`;
});

fun_btn.forEach((button) => {
  document.querySelector(
    ".fun-list"
  ).innerHTML += `<button class="box" id="${button.name}">${button.symbol}</button>`;
});

container.addEventListener("click", (event) => {
  let target_btn = event.target;
  cal_btn.forEach((button) => {
    if (button.name === target_btn.id) {
      calculator(button);
    }
  });
});
trigonometry.addEventListener("click", (event) => {
  let target_btn = event.target;
  trigo_btn.forEach((button) => {
    if (button.name === target_btn.id) {
      calculator(button);
    }
  });
});

func.addEventListener("click", (event) => {
  let target_btn = event.target;
  fun_btn.forEach((button) => {
    if (button.name === target_btn.id) {
      calculator(button);
    }
  });
});

function calculator(btn) {
  if (btn.type === "operator") {
    data.operation.push(btn.symbol);
    data.formula.push(btn.formula);
    console.log(data);
    updateOutput(data.operation.join(""));
  } else if (btn.type === "number") {
    data.operation.push(btn.symbol);
    data.formula.push(btn.formula);
    console.log(data);
    updateOutput(data.operation.join(""));
  } else if (btn.type === "math_function") {
    let symbol, formula;
    if (btn.name == "factorial") {
      symbol = "!";
      formula = btn.formula;
      data.operation.push(symbol);
      data.formula.push(formula);
    } else if (btn.name == "power") {
      symbol = "^(";
      formula = btn.formula;
      data.operation.push(symbol);
      data.formula.push(formula);
    } else if (btn.name == "square") {
      symbol = "^(";
      formula = btn.formula;
      data.operation.push(symbol);
      data.formula.push(formula);

      data.operation.push("2)");
      data.formula.push("2)");
    } else if (btn.name == "tentopx") {
      symbol = "10^(";
      formula = btn.formula;
      data.operation.push(symbol);
      data.formula.push(formula);
    } else if (btn.name == "1byx") {
      symbol = "1/(";
      formula = btn.formula;
      data.operation.push(symbol);
      data.formula.push(formula);
    } else if (btn.name == "mod") {
      symbol = "%";
      formula = btn.formula;
      data.operation.push(symbol);
      data.formula.push(formula);
    } else if (btn.name == "mod-x") {
      symbol = "abs(";
      formula = btn.formula;
      data.operation.push(symbol);
      data.formula.push(formula + "(");
    } else if (btn.name == "mod_x_fun") {
      symbol = "abs(";
      formula = btn.formula;
      data.operation.push(symbol);
      data.formula.push(formula + "(");
    } else if (btn.name == "ceil_x") {
      symbol = "ceil(";
      formula = btn.formula;
      data.operation.push(symbol);
      data.formula.push(formula + "(");
    } else if (btn.name == "floor_x") {
      symbol = "floor(";
      formula = btn.formula;
      data.operation.push(symbol);
      data.formula.push(formula + "(");
    } else if (btn.name == "random") {
      symbol = "random";
      formula = btn.formula;
      data.operation.push(symbol);
      data.formula.push(formula + "()");
    } else {
      symbol = btn.symbol + "(";
      formula = btn.formula + "(";
      data.operation.push(symbol);
      data.formula.push(formula);
    }
    updateOutput(data.operation.join(""));
  } else if (btn.type === "key") {
    if (btn.name == "clear") {
      data.operation = [];
      data.formula = [];
      updateOutput(data.operation.join(""));
    } else if (btn.name == "backspace") {
      data.operation.pop();
      data.formula.pop();
      console.log("clicked");
      updateOutput(data.operation.join(""));
    } else if (btn.name == "plusorminys") {
        data.operation[pointer] = "-" + data.operation[pointer];
        data.formula[pointer] = "-" + data.formula[pointer];
        updateOutput(data.operation.join(""));
    }
  } else if (btn.type === "calculate") {
    let formula_str = data.formula.join("");
    let result = eval(formula_str);
    updateOutput(result);
    data.formula = [];
    data.operation = [];
    data.formula.push(result);
    data.operation.push(result);
  } else if (btn.type == "trigo_function") {
    data.operation.push(btn.symbol + "(");
    data.formula.push(btn.formula);
    updateOutput(data.operation.join(""));
  }
}
function updateOutput(operation) {
  display.value = operation;
}
document.getElementById("deg").addEventListener("click",()=>{
  if(document.getElementById("deg").value=="DEG"){
    document.getElementById("deg").value="RED";
  }else{
    document.getElementById("deg").value="DEG";
  }
});

