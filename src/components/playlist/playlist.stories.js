import { playerWithPlaylist, playerWithControls } from "./playlist";

export default {
  title: "Components/JsPlaylist",
};

export const playerControls = () => playerWithControls();
export const playlist = () => playerWithPlaylist();
