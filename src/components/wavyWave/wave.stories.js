import centered from "@storybook/addon-centered/html";
import { createWaves } from "./wave";
import "./wave.css";
// import wavyElement from "./wave.js";

export default { title: "Components/Wave", decorators: [centered] };

export const wavyWaveforEqualizer = () => createWaves();
