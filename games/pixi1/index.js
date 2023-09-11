// //@ts-check
import {terrain, terrain_suffix, terrain_anchor, terrain_hitArea} from '../assets/terrain/tree.js';

let app =  new PIXI.Application({ resizeTo: window});

document.body.appendChild(app.view);
//app.renderer.resize(window.innerWidth, window.innerHeight);

app.stage.eventMode = "static";
app.stage.on("pointermove", moveMouse);
app.stage.on("pointerdown", (event) => { moving = !moving; });

// setup terrain
let terrain_roadCross_NE = PIXI.Sprite.from('../assets/terrain/terrain_roadCross_NE.png');
terrain_roadCross_NE.anchor.set(...terrain_anchor);
terrain_roadCross_NE.hitArea = new PIXI.Polygon(...terrain_hitArea);
terrain_roadCross_NE.eventMode = "dynamic";
terrain_roadCross_NE.on('pointerover', (event) => { terrain_roadCross_NE.tint = 0x1111DD; });
terrain_roadCross_NE.on('pointerout', (event) => { terrain_roadCross_NE.tint = 0xFFFFFF; });


app.stage.addChild(terrain_roadCross_NE);

// setup vehicle
let vehicle = PIXI.Sprite.from("../assets/spacekit/Isometric/craft_racer_NE.png");
vehicle.anchor.set(0.5);
vehicle.eventMode = "none"
//vehicle.on('pointerdown', (event) => { moving = !moving; });

app.stage.addChild(vehicle);


function moveMouse(e) {
    let pos = e.data.global;
    if (moving) {
        vehicle.x = pos.x;
        vehicle.y = pos.y;
    }
    
}

windowResize();

// Add a variable to count up the seconds our demo has been running
let elapsed = 0.0;
let moving = false;

app.ticker.add((delta) => {
    // Add the time to our total elapsed time
    if (moving) {
        elapsed += delta;
    }

    // Update the sprite's X position based on the cosine of our elapsed time.  We divide
    // by 50 to slow the animation down a bit...
    terrain_roadCross_NE.x = app.screen.width/2 + Math.cos(elapsed/150.0) * app.screen.width/2 * 0.9;
    terrain_roadCross_NE.y = app.screen.height/2 + Math.sin(elapsed/75.0) * app.screen.height/2 * 0.9;
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