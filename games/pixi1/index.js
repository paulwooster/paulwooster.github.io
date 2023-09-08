// //@ts-check
import {terrain, terrain_suffix, terrain_anchor, terrain_hitArea} from '../assets/terrain/tree.js';

let app =  new PIXI.Application({ width: 512, height: 512});

document.body.appendChild(app.view);
app.renderer.resize(window.innerWidth, window.innerHeight);

let sprite = PIXI.Sprite.from('../assets/terrain/terrain_roadCross_NE.png');

sprite.anchor.set(...terrain_anchor);
sprite.hitArea = new PIXI.Polygon(...terrain_hitArea);

sprite.eventMode = "dynamic";
sprite.on('pointerdown', (event) => { moving = !moving; });
app.stage.addChild(sprite);
windowResize();

// Add a variable to count up the seconds our demo has been running
let elapsed = 0.0;
let moving = true;

app.ticker.add((delta) => {
    // Add the time to our total elapsed time
    if (moving) {
        elapsed += delta;
    }

    // Update the sprite's X position based on the cosine of our elapsed time.  We divide
    // by 50 to slow the animation down a bit...
    sprite.x = app.screen.width/2 + Math.cos(elapsed/150.0) * app.screen.width/2 * 0.9;
    sprite.y = app.screen.height/2 + Math.sin(elapsed/75.0) * app.screen.height/2 * 0.9;
});

// Fullscreen in pixi is resizing the renderer to be window.innerWidth by window.innerHeight
window.addEventListener("resize", windowResize);

function windowResize() {
    app.renderer.resize(window.innerWidth, window.innerHeight);
}

let fullScreen = false;
function goFullscreen () {
    if (!fullScreen) {
        document.documentElement.requestFullscreen();
        fullScreen = true;
    }
}

function leaveFullscreen () {
    if (fullScreen) {
        document.exitFullscreen();
        fullScreen = false;
    }
}

console.log(terrain);
console.log(terrain_suffix);