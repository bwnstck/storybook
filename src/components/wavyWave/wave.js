import { createElement } from "../../utils/elements";
// Animation with setInterval() Reference: https://developer.mozilla.org/de/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
let IntervallID;

function startAnimation() {
  changeHeightAndColor();
  IntervallID = setInterval(changeHeightAndColor, 500);
  console.log("animation started");
}
function stopAnimation() {
  clearInterval(IntervallID);
  console.log("animation stopped");
}

function changeHeightAndColor() {
  changeColorOf("eq-line");
  changeHeightOf("eq-line");
}

function getRandomNumberRange(min, max, { floor = true } = {}) {
  if (floor) {
    return Math.floor(Math.random() * (max - min) + min);
  } else {
    return Math.random() * (max - min) + min;
  }
}

function getRandomRGB(colorString) {
  const r = getRandomNumberRange(colorString.r, colorString.r + 50);
  const g = getRandomNumberRange(colorString.g, colorString.g + 50);
  const b = getRandomNumberRange(colorString.b, colorString.b + 50);
  const rgb = `rgb(${r},${g},${b})`;
  return rgb;
}

function changeColorOf(className, colorString) {
  const eleToChange = document.getElementsByClassName(className);
  eleToChange.forEach((element) => {
    element.style.backgroundColor = getRandomRGB(colorString);
  });
}

function changeHeightOf(elem) {
  if (typeof elem === "string") {
    const elemList = document.getElementsByClassName(elem);
    elemList.forEach((elem) => {
      elem.style.height = `${getRandomNumberRange(5, 30, { floor: false })}vh`;
    });
  } else {
    elem.style.height = `${getRandomNumberRange(5, 30, { floor: false })}vh`;
  }
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function createWaves() {
  const container = document.createElement("div");
  container.className = "waveContainer";

  const waveBox = document.createElement("div");

  waveBox.className = "waveBox";

  const defaultRGB = { r: 100, g: 0, b: 100 };

  for (let i = 0; i < 40; i++) {
    const line = document.createElement("div");
    line.className = "eq-line";
    changeHeightOf(line);
    line.style.backgroundColor = getRandomRGB(defaultRGB);
    waveBox.append(line);
  }

  const colorChanger = document.createElement("button");
  colorChanger.className = "colorChanger";
  colorChanger.innerText = "Change Color";
  colorChanger.onclick = () => changeColorOf("eq-line", rgbColor);

  const heightChanger = document.createElement("button");
  heightChanger.className = "heightChanger";
  heightChanger.innerText = "Change Height";
  heightChanger.onclick = () => changeHeightOf("eq-line");

  const startButton = createElement("button", {
    className: "start-button",
    innerText: "Start",
    onclick: () => {
      startAnimation();
    },
  });
  const stopButton = createElement("button", {
    className: "stop-button",
    innerText: "Stop",
    onclick: () => {
      stopAnimation();
    },
  });

  const colorInput = createElement("input", {
    className: "colorInput",
    id: "colorPicker",
    type: "color",
    placeholder: "Input your rgb([0-255],[0-255],[0-255])",
  });

  const submitButton = createElement("button", {
    className: "submitButton",
    innerText: "Submit Color",
    onclick: () => {
      changeColorOf("eq-line");
    },
  });

  const color = { r: 100, g: 0, b: 100 };

  const rgbColor = hexToRgb(color);

  container.append(
    waveBox,
    colorChanger,
    heightChanger,
    startButton,
    stopButton,
    colorInput,
    submitButton
  );
  return container;
}
