import { createTrackElement } from "./track";

export default {
  title: "Components/JsElements",
};

const track =   {
  artist: "Santa Claus",
  title: "Christmas Adventure",
  url: "http://soundbible.com/mp3/dixie-horn_daniel-simion.mp3",
};


export const beatIt = () => createTrackElement(track);


export const christmas = () => createTrackElement({
  artist: "Santa Claus",
  title: "Christmas Adventure",
  url: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/TRG_Banks/TRG_Banks_Christmas_Album/TRG_Banks_-_08_-_A_Christmas_adventure_Part_1.mp3",
});
