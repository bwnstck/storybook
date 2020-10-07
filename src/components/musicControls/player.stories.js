import centered from "@storybook/addon-centered/html";

import "./player.css";

import playerBack from "./back.html";
import playerPlay from "./play.html";
import playerNext from "./next.html";
import playerPlaylist from "./playlist.html";
import playerRepeat from "./repeat.html";
import playerEq from "./eq.html";
import playerShuffle from "./shuffle.html";
import playerFav from "./favorites.html";
import playerHome from "./home.html";

import playerControls from "./player-controls.html";
import playerMenu from "./player-menu.html";
import player from "./player.html";

export default { title: "Components/PlayerControls", decorators: [centered] };

export const back = () => playerBack;
export const play = () => playerPlay;
export const next = () => playerNext;

export const playlist = () => playerPlaylist;
export const repeat = () => playerRepeat;
export const equalizer = () => playerEq;
export const shuffle = () => playerShuffle;
export const favorites = () => playerFav;

export const home = () => playerHome;

export const allControls = () => playerControls;
export const menu = () => playerMenu;
export const wholePlayer = () => player;
