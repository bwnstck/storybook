import PlayButtonImg from "../../assets/play-active.svg";

import { showPauseButton, showPlayButton } from "../../assets/js/player";

export function createTrackElement(track) {
  // !ADD HTML Elements
  const listElement = document.createElement("li");
  const trackImg = document.createElement("img");
  const songBox = document.createElement("div");
  const songInfo = document.createElement("div");
  const title = document.createElement("h6");
  const artist = document.createElement("span");
  const playSongButton = document.createElement("img");

  // !ADD Classes
  trackImg.classList.add("song-pic");
  songBox.classList.add("song");
  songInfo.classList.add("song-info");
  title.classList.add("song-title");
  artist.classList.add("song-artist");
  playSongButton.classList.add("play-pic");

  // !ADD Song
  const audioObj = new Audio(track.url);

  // !ADD Eventlisteners

  let isPlaying = false;

  playSongButton.onclick = () => {
    isPlaying
      ? (audioObj.pause(), showPlayButton(playSongButton))
      : (audioObj.play(), showPauseButton(playSongButton));

    switchIsPlaying();
  };

  // !Extracted Functions

  const switchIsPlaying = () => {
    isPlaying = !isPlaying;
  };

  // !ADD Sources
  title.innerText = track.title;
  artist.innerText = track.artist;
  playSongButton.src = PlayButtonImg;
  playSongButton.alt = "Play Button";
  trackImg.src = `https://source.unsplash.com/100x100/?${track.imgSrc}`;
  trackImg.alt = `Album Cover ${track.artist}`;

  // !Link HTML Elements together
  listElement.append(trackImg, songBox);
  songInfo.append(title, artist);
  songBox.append(songInfo, playSongButton);

  // !Returning Outer HTML Element
  return listElement;

  /* //! HTML of Storybook/Pages/navigation/navSongs.html
   <li>
  <img
    src="https://source.unsplash.com/100x100/?artist,music"
    alt=""
    class="song-pic"
  />
  <div class="song">
    <div class="song-info">
      <h6 class="song-title">Song-Titel</h6>
      <span class="song-artist">Song-Artist</span>
    </div>
    <img src="../../assets/play-active.svg" alt="" class="play-pic" />
  </div>
  </li> */
}
