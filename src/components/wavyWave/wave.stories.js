// 0. Okey, Storybook soll das ganze zentrieren
import centered from "@storybook/addon-centered/html";
// 1. createWaves importieren aus der Datei wave.js im gleichen Ordner
import { createWaves } from "./wave";
// 2. CSS-Datei wave.css aus dem gleichen Ordner importieren
import "./wave.css";
// 3. Neuen Menüeintrag unter Components in Storybook erstellen mit dem Namen Wave und das ganze zentrieren (oben importiert)
export default { title: "Components/Wave", decorators: [centered] };
// 4. Unter Wave soll ein Eintrag erscheinen mit dem Namen "Wavy Wave for Equalizer", dazu wird createWaves ausgeführt (mit () hinter createWaves)
export const wavyWaveforEqualizer = () => createWaves();

// !5. weiter in die wave.js Datei in Zeile 35
