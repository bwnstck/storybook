import centered from "@storybook/addon-centered/html";

import "./wave.css";
// import wavyElement from "./wave.js";

export default { title: "Components/Wave", decorators: [centered] };

export const wavyWaveforEqualizer = () => {
  const waveBox = document.createElement("div");
  for (let i = 0; i < 20; i++) {
    const line = document.createElement("div");
    line.className = "eq-line";

    waveBox.append(line);
  }
  return waveBox;
};
