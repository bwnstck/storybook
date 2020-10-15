import PlayButtonImg from "../../assets/play-active.svg";
import PauseButtonImg from "../../assets/pause-active.svg";

export const showPlayButton = (btn) => {
  btn.src = PlayButtonImg;
  btn.alt = "Pause Button";
};

export const showPauseButton = (btn) => {
  btn.src = PauseButtonImg;
  btn.alt = "Play Button";
};

// !Menu

export const chooseHome = () => {
  console.log("Navigating to Home");
};

export const chooseSongs = () => {
  console.log("Navigating to Songs");
};

export const chooseSettings = () => {
  console.log("Navigating to Settings");
};

// !Playback
export const playSong = () => {
  console.log("Song Played");
};
export const nextSong = () => {
  console.log("Next Song");
};
export const lastSong = () => {
  console.log("REEEEEEEWIND");
};
