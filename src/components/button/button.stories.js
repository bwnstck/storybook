import "./button.css";
import buttonShare from "./button-share.html";
import buttonLogo from "./button-play.html";
import buttonFavorites from "./button-favorites.html";
import buttonAll from "./button-all.html";
export default { title: "Components/Button" };

export const withShare = () => buttonShare;
export const withPlay = () => buttonLogo;
export const withFavorites = () => buttonFavorites;
export const allButtons = () => buttonAll;
