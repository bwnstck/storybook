import centered from "@storybook/addon-centered/html";

import "./nav.css";
import nav from "./nav.html";
import navSongs from "./navSongs.html";

export default { title: "Pages/Navigation", decorator: [centered] };

export const BottomNavigation = () => nav;
export const navWithSongs = () => navSongs;
