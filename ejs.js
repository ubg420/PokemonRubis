const gamewrap = document.querySelector(".game-wrap");
const game = document.querySelector("#game");
const pageurl = 'pokemon-leafgreen';
const gameindex = gamesArr.findIndex((element) => element.link == pageurl);

const gamename = game.dataset.gamename;
const core = game.dataset.core;
const gn = gamename.substring(0, gamename.lastIndexOf('.')) || gamename;

const ejsscript = document.createElement("script");
ejsscript.text = `
EJS_color = '#E77E7E';
      EJS_player = "#game";
      EJS_gameName = "${gn}";
      EJS_biosUrl = "";
      EJS_gameUrl = "games/emulatorjs/${gamename}";
      EJS_core = "${core}";
      EJS_pathtodata = "";
      EJS_oldEJSNetplayServer = true;
      EJS_gameID = "${gameindex}";`;
gamewrap.appendChild(ejsscript);
const script = document.createElement("script");
script.src = "loader.js";
gamewrap.appendChild(script);
