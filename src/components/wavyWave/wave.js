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

export function createWaves() {
  const container = document.createElement("div");
  container.className = "waveContainer";

  const waveBox = document.createElement("div");

  waveBox.className = "waveBox";

  for (let i = 0; i < 40; i++) {
    const line = document.createElement("div");
    line.className = "eq-line";
    line.style.height = `${getRandomNumberRange(5, 30, { floor: false })}vh`;
    line.style.backgroundColor = getRandomRGB();
    waveBox.append(line);
  }

  const colorChanger = document.createElement("button");
  colorChanger.className = "colorChanger";
  colorChanger.innerText = "Change Color";
  colorChanger.onclick = () => changeColorOf("eq-line");

  container.append(waveBox, colorChanger);
  return container;
}
