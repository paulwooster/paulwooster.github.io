import terrain_tree from '../assets/terrain/tree.js';

let app =  new PIXI.Application({ width: 512, height: 512});

document.body.appendChild(app.view);
app.renderer.resize(window.innerWidth, window.innerHeight);

let sprite = PIXI.Sprite.from('../assets/terrain/terrain_roadCross_NE.png');

sprite.anchor.set(0.5,0.615);
sprite.hitArea = new PIXI.Polygon(
    64,0,
    0,32,
    -64,0,
    0,-32
);

sprite.eventMode = "dynamic";
sprite.on('pointerdown', (event) => { alert('clicked!'); });
app.stage.addChild(sprite);
windowResize();

// Add a variable to count up the seconds our demo has been running
let elapsed = 0.0;
const MAX_ELAPSED = 500;

app.ticker.add((delta) => {
    // Add the time to our total elapsed time
    if (elapsed < MAX_ELAPSED) {
        elapsed += delta;
    }

    // Update the sprite's X position based on the cosine of our elapsed time.  We divide
    // by 50 to slow the animation down a bit...
    sprite.x = app.screen.width/2 + Math.cos(elapsed/50.0) * app.screen.width/2 * 0.9;
    sprite.y = app.screen.height/2 + Math.sin(elapsed/25.0) * app.screen.height/2 * 0.9;
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

console.log(terrain_tree);
