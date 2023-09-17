This repo holds various web-based games and other projects.

Note, the files in this repo are generally licensed under MIT license (see LICENSE file) unless noted in the relevant folder.

Satellite dish favicon is CC-BY 4.0 from https://github.com/twitter/twemoji/blob/master/assets/svg/1f4e1.svg via https://favicon.io/emoji-favicons/satellite-antenna


Some resources for game development:

https://developer.mozilla.org/en-US/docs/Games/Tutorials


https://www.kenney.nl/assets/space-kit

https://www.kenney.nl/assets/sci-fi-rts

https://www.kenney.nl/assets/hexagon-tiles
https://www.kenney.nl/assets/hexagon-pack
https://www.kenney.nl/assets/hexagon-buildings

https://www.kenney.nl/assets/hexagon-kit

https://www.kenney.nl/assets/ui-pack
https://www.kenney.nl/assets/ui-pack-space-expansion

https://www.kenney.nl/assets/sci-fi-sounds


https://pixijs.com/guides/basics/getting-started


http://phaser.io/

https://phasergames.com/

https://opengameart.org/content/orange-scifi-buildings-for-isometric-games
https://opengameart.org/content/orange-manufactory-isometric
https://opengameart.org/content/isometric-lab-style-building-orange-and-white-4-directions



https://karnbianco.co.uk/blog/2018/04/10/tutorial-animated-spritesheets-with-gimp-and-unity/

https://github.com/Spydarlee/scripts/tree/master/GIMP


w3schools uses codemirror for "try it" examples

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE

// This is CodeMirror (http://codemirror.net), a code editor
// implemented in JavaScript on top of the browser's DOM.
//
// You can find some technical background for some of the code below
// at http://marijnhaverbeke.nl/blog/#cm-internals .



Planetary game concepts:

Resource acquisition, transport, processing

Energy production, storage, allocation
keep alive power, limp mode

Power lines, power beaming, surface transport/transfer, remote depots

mobile outposts
mining and construction vehicles
transport vehicles
exploration vehicles

terrain types, transit cost, barriers

exploring / revealing tiles, finding resources


potential objectives:
 * area explored
 * special markers discovered
 * population, resources, other assets
 * "monuments"
 * return ships

interplanetary trade

local trade

trade with other players

multi-player


compete against physics, nature, and time, rather than combat with other players

equipment failures
dust storms
meteorites

seasonal and diurnal energy production


unit tasking / sequencing



https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/offsetX

<p>Move your mouse to see its position.</p>
<canvas id="hello"> </canvas>
<p id="screen-log"></p>


let screenLog = document.querySelector("#screen-log");
let hello = document.getElementById("hello")
hello.addEventListener("pointermove", logKey);

function logKey(e) {
  screenLog.innerText = `
    Screen X/Y: ${e.screenX}, ${e.screenY}
    Client X/Y: ${e.clientX}, ${e.clientY}
    Offset X/Y: ${e.offsetX}, ${e.offsetY}`;
}


https://github.com/IceCreamYou/MainLoop.js/blob/gh-pages/src/mainloop.js

https://www.isaacsukin.com/news/2015/01/detailed-explanation-javascript-game-loops-and-timing

https://github.com/ruby0x1/realtime-multiplayer-in-html5

http://free-tex-packer.com/

https://www.pixijselementals.com/#keyboard