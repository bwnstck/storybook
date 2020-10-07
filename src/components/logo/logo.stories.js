import "./logo.css";
import logoText from "./logo-text.html";
import logo from "./logo.html";

export default { title: "Components/Logo", decorators: [centered] };

export const logoOriginal = () => logo;
export const logoWithText = () => logoText;
