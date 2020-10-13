import PlayButtonImg from "../../assets/play-active.svg";

export function createTrackElement(track) {
  // !ADD HTML Elements
  const UL = document.createElement("ul");
  const listElement = document.createElement("li");
  const trackImg = document.createElement("img");
  const songBox = document.createElement("div");
  const songInfo = document.createElement("div");
  const title = document.createElement("h6");
  const artist = document.createElement("span");
  const playButton = document.createElement("img");

  // !ADD Classes
  UL.classList.add("playlist");
  trackImg.classList.add("song-pic");
  songBox.classList.add("song");
  songInfo.classList.add("song-info");
  title.classList.add("song-title");
  artist.classList.add("song-artist");
  playButton.classList.add("play-pic");

  // !ADD Song
  const audioObj = new Audio(track.url);


  // !ADD Eventlisteners

  playButton.onclick = function (){
    audioObj.play();
    
  }

  // !ADD Sources
  title.innerText = track.title;
  artist.innerText = track.artist;
  playButton.src = PlayButtonImg;
  playButton.alt = "Play Button";
  trackImg.src = "https://source.unsplash.com/100x100/?artist,music";
  trackImg.alt = "Album Cover";

  // !Link HTML Elements together
  UL.append(listElement);
  listElement.append(trackImg, songBox);
  songInfo.append(title, artist);
  songBox.append(songInfo, playButton);

  // !Returning Outer HTML Element
  return UL;

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
