function getRandomNumberRange(min, max, { floor = true } = {}) {
  if (floor) {
    return Math.floor(Math.random() * (max - min) + min);
  } else {
    return Math.random() * (max - min) + min;
  }
}

function getRandomRGB() {
  const r = getRandomNumberRange(100, 150);
  const g = 0;
  const b = getRandomNumberRange(100, 150);
  const rgb = `rgb(${r},${g},${b})`;
  return rgb;
}

function changeColorOf(className) {
  const eleToChange = document.getElementsByClassName(className);
  eleToChange.forEach((element) => {
    element.style.backgroundColor = getRandomRGB();
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

export function createWaves() {
  const container = document.createElement("div");
  container.className = "waveContainer";

  const waveBox = document.createElement("div");

  waveBox.className = "waveBox";

  for (let i = 0; i < 40; i++) {
    const line = document.createElement("div");
    line.className = "eq-line";
    changeHeightOf(line);
    line.style.backgroundColor = getRandomRGB();
    waveBox.append(line);
  }

  const colorChanger = document.createElement("button");
  colorChanger.className = "colorChanger";
  colorChanger.innerText = "Change Color";
  colorChanger.onclick = () => changeColorOf("eq-line");

  const heightChanger = document.createElement("button");
  heightChanger.className = "heightChanger";
  heightChanger.innerText = "Change Height";
  heightChanger.onclick = () => changeHeightOf("eq-line");

  container.append(waveBox, colorChanger, heightChanger);
  return container;
}
