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

export const switchIsPlaying = () => {
  isPlaying = !isPlaying;
};
