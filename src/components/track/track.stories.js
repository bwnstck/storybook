import { createTrackElement } from "./track";

export default {
  title: "Components/JsElements",
};

const monsterTruck = {
  artist: "Monster Truck",
  title: "Greeting",
  imgSrc: "monster, truck",
  url: "http://soundbible.com/mp3/dixie-horn_daniel-simion.mp3",
};
const horribleWav = {
  artist: "Santa Claus",
  title: "Christmas Adventure",
  imgSrc: "christmas",
  url:
    "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/TRG_Banks/TRG_Banks_Christmas_Album/TRG_Banks_-_08_-_A_Christmas_adventure_Part_1.mp3",
};
const horribleWav2 = {
  artist: "Horn",
  title: "Jingle",
  imgSrc: "car",
  url: "http://soundbible.com/mp3/dixie-horn_daniel-simion.mp3",
};

const playlist = [monsterTruck, horribleWav, horribleWav2];

export const songs = () => {
  const UL = document.createElement("ul");
  UL.classList.add("playlist");

  //   ! Map
  playlist.map((track) => {
    UL.append(createTrackElement(track));
  });

  // ! forEach()
  //   playlist.forEach((item) => {
  //     UL.append(createTrackElement(item));
  //   });
  // ! for...of
  //   for (let track of playlist) {
  //     let song = createTrackElement(track);
  //     UL.append(song);
  //   }
  // ! for-loop
  //   for (let i = 0; i < playlist.length; i++) {
  //     let song = createTrackElement(playlist[i]);
  //     UL.append(song);
  //   }

  return UL;
};
