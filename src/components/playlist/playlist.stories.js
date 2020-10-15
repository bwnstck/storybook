import { createElement } from "../../utils/elements";
import { songs } from "../track/track.stories";
import * as playback from "../../assets/js/player";

import backSvg from "../../assets/back.svg";
import playSvg from "../../assets/play-transparent.png";
import playFullSvg from "../../assets/play_circle.svg";
import nextSvg from "../../assets/next.svg";

import playlistIcon from "../../assets/playlist.svg";
import shuffleIcon from "../../assets/shuffle.svg";
import repeatIcon from "../../assets/repeat.svg";
import eqIcon from "../../assets/eq.svg";
import favIcon from "../../assets/favorites.svg";

import songsSVG from "../../assets/songs-active.svg";
import settingsSVG from "../../assets/settings.svg";

export default {
  title: "Components/JsPlaylist",
};

export const playerWithPlaylist = () => {
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

  // !Player Navigation HOME/SONGS/Settings
  const playerNav = createElement("div", {
    className: "player__nav",
    children: [menuItemHome, menuItemSongs, menuItemSettings],
  });

  // !Player Controls

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
    onclick: playback.nextSong,
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
  // !Import of songList as playlist
  const playlist = songs();
  const Player = createElement("div", {
    className: "playlist",
    children: [playlist, playerControlBar, playerNav],
  });
  return Player;
};

//!! Fullscreen Player
export const playerWithControls = () => {
  // ! Menu Items

  const menuItemsList = [
    {
      name: "Playlist",
      slug: "playlist",
      src: playlistIcon,
    },
    {
      name: "Shuffle",
      slug: "shuffle",
      src: shuffleIcon,
    },
    {
      name: "Repeat",
      slug: "repeat",
      src: repeatIcon,
    },
    {
      name: "EQ",
      slug: "equalizer",
      src: eqIcon,
    },
    {
      name: "Favourites",
      slug: "favorites",
      src: favIcon,
    },
  ];
  const playerMenu = createElement("div", {
    className: "menu",
  });
  menuItemsList.forEach((item) => {
    const PlaybackItem = createElement("div", {
      className: "menu__item",
      children: [
        createElement("div", {
          className: "menu--img",
          children: [
            createElement("img", {
              className: `${item.slug}-icon`,
              src: item.src,
              alt: `${item.name} Icon`,
            }),
          ],
        }),
        createElement("span", {
          className: "menu--text",
          innerText: `${item.name}`,
        }),
      ],
    });

    playerMenu.append(PlaybackItem);
  });

  // !Player Controls
  const playerNext = createElement("img", {
    className: "player__next",
    src: nextSvg,
    alt: "last Song",
  });
  const playerPlay = createElement("img", {
    className: "player__play",
    src: playFullSvg,
    alt: "last Song",
  });
  const playerBack = createElement("img", {
    className: "player__back",
    src: backSvg,
    alt: "last Song",
  });

  const playerPlayback = createElement("div", {
    className: "player__playback-actions",
    children: [playerBack, playerPlay, playerNext],
  });

  const playerControls = createElement("div", {
    className: "player",
    children: [playerPlayback, playerMenu],
  });

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

  // !Player Navigation HOME/SONGS/Settings
  const playerNav = createElement("div", {
    className: "player__nav",
    children: [menuItemHome, menuItemSongs, menuItemSettings],
  });

  const container = createElement("div", {
    children: [playerNav, playerControls],
  });

  return container;
};
