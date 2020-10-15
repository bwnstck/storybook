import { createElement } from "../../utils/elements";
import { songs } from "../track/track.stories";
import * as playback from "../../assets/js/player";

import backSvg from "../../assets/back.svg";
import playSvg from "../../assets/play-transparent.png";
import nextSvg from "../../assets/next.svg";

import songsSVG from "../../assets/songs-active.svg";
import settingsSVG from "../../assets/settings.svg";

export default {
  title: "Components/JsElements",
};

export const player = () => {
  // !Settings
  const settingsText = createElement("span", {
    className: "menu--text",
    innerText: "Settings",
  });
  const settingsIcon = createElement("img", {
    className: "nav-icon",
    src: settingsSVG,
  });
  const menuItemSettingsAnchor = createElement("a", {
    children: [settingsIcon, settingsText],
    onclick: playback.chooseSettings,
  });
  const menuItemSettings = createElement("div", {
    className: "menu__item",
    children: [menuItemSettingsAnchor],
  });
  // !Songs
  const songsText = createElement("span", {
    className: "menu--text goTo-Text",
    innerText: "Songs",
  });
  const songsIcon = createElement("img", {
    className: "nav-icon",
    src: songsSVG,
  });
  const menuItemSongsAnchor = createElement("a", {
    children: [songsIcon, songsText],
    onclick: playback.chooseSongs,
  });
  const menuItemSongs = createElement("div", {
    className: "menu__item",
    children: [menuItemSongsAnchor],
  });

  // !HOME
  const homeText = createElement("span", {
    className: "menu--text",
    innerText: "Home",
  });

  const round = createElement("div", {
    className: "round",
  });
  const square = createElement("div", {
    className: "square",
  });
  const square1 = createElement("div", {
    className: "square",
  });
  const square2 = createElement("div", {
    className: "square",
  });

  const HomeIcon = createElement("div", {
    className: "home",
    children: [square, round, square1, square2],
  });

  const menuItemHomeAnchor = createElement("a", {
    children: [HomeIcon, homeText],
    onclick: playback.chooseHome,
  });

  const menuItemHome = createElement("div", {
    className: "menu__item",
    children: [menuItemHomeAnchor],
  });
  const playerNav = createElement("div", {
    className: "player__nav",
    children: [menuItemHome, menuItemSongs, menuItemSettings],
  });

  // !Song Info

  const play = createElement("img", {
    className: "player__play",
    src: playSvg,
    alt: "Play",
  });
  const next = createElement("img", {
    className: "player__next",
    src: nextSvg,
    alt: "Next",
  });
  const back = createElement("img", {
    className: "player__back",
    src: backSvg,
    alt: "Back",
  });

  const nextAnchor = createElement("a", {
    className: "player__controls-anchor",
    onclick: playback.nextSong,
    children: [next],
  });
  const playAnchor = createElement("a", {
    className: "player__controls-anchor",
    onclick: playback.playSong,
    children: [play],
  });
  const backAnchor = createElement("a", {
    className: "player__controls-anchor",
    onclick: playback.lastSong,
    children: [back],
  });

  const playbackActions = createElement("div", {
    className: "player__playback-actions",
    children: [backAnchor, playAnchor, nextAnchor],
  });

  const songArtist = createElement("span", {
    className: "song-artist",
    innerText: "Die Zukunft",
  });
  const songTitel = createElement("h6", {
    className: "song-title",
    innerText: "Ich bin so kluk, k.l.u.k.",
  });

  const songInfo = createElement("div", {
    className: "song-info",
    children: [songTitel, songArtist],
  });
  const nowPlayedPic = createElement("img", {
    className: "song-pic",
    src: "https://source.unsplash.com/100x100/?simpsons",
    alt: "Now played",
  });
  const playerControlBar = createElement("div", {
    className: "player__controlbar",
    children: [nowPlayedPic, songInfo, playbackActions],
  });

  const playlist = songs();
  const Player = createElement("div", {
    className: "playlist",
    children: [playlist, playerControlBar, playerNav],
  });
  return Player;
};
