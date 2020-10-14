import { createTrackElement } from "./track";

export default {
  title: "Components/JsElements",
};

const track = {
  artist: "Monster Truck",
  title: "Greeting",
  imgSrc: "monster-truck",
  url: "http://soundbible.com/mp3/dixie-horn_daniel-simion.mp3",
};

export const horn = () => createTrackElement(track);

export const christmas = () =>
  createTrackElement({
    artist: "Santa Claus",
    title: "Christmas Adventure",
    imgSrc: "christmas",
    url:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/TRG_Banks/TRG_Banks_Christmas_Album/TRG_Banks_-_08_-_A_Christmas_adventure_Part_1.mp3",
  });
