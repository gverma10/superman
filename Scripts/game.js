/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="objects/buildings1.ts" />
/// <reference path="objects/buildings2.ts" />
/// <reference path="objects/buildings3.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="objects/cloud.ts" />
/// <reference path="objects/cloud1.ts" />
/// <reference path="objects/cloud2.ts" />
/// <reference path="objects/cloud3.ts" />
/// <reference path="objects/cloud4.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/kryptonite.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/laser.ts" />
/// <reference path="objects/lex.ts" />
/// <reference path="objects/missile.ts" />
/// <reference path="objects/ocean.ts" />
/// <reference path="objects/person1.ts" />
/// <reference path="objects/person2.ts" />
/// <reference path="objects/person3.ts" />
/// <reference path="objects/person4.ts" />
/// <reference path="objects/person5.ts" />
/// <reference path="objects/points.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="objects/sunmoon.ts" />
/// <reference path="objects/superman.ts" />
/// <reference path="objects/superman_free.ts" />
/// <reference path="objects/superman_hori.ts" />
/// <reference path="constants.ts" />
/// <reference path="states/gameplay_level1.ts" />
/// <reference path="states/gameplay_level2.ts" />
/// <reference path="states/gameplay_level3.ts" />
/// <reference path="states/gameplay_level4.ts" />
/// <reference path="states/gameover.ts" />
/// <reference path="states/menu_level1.ts" />
/// <reference path="states/menu_level2.ts" />
/// <reference path="states/menu_level3.ts" />
/// <reference path="states/menu_level4.ts" />
/// <reference path="states/win.ts" />
// Global game Variables
var canvas;
var stage;
var assetLoader;
var currentScore = 0;
var highScore = 0;
// Game State Variables
var currentState;
var currentStateFunction;
var stateChanged = false;
// Game State Variables
var currentState;
var currentStateFunction;
var stateChanged = false;
var gamePlay1;
var gamePlay2;
var gamePlay3;
var gamePlay4;
var gameOver;
var gameWin;
var menu1;
var menu2;
var menu3;
var menu4;
var manifest = [
    { id: "cloud", src: "assets/images/cloud_4.png" },
    { id: "cloud1", src: "assets/images/cloud_1.png" },
    { id: "cloud2", src: "assets/images/cloud_2.png" },
    { id: "cloud3", src: "assets/images/cloud_3.png" },
    { id: "cloud4", src: "assets/images/cloud_5.png" },
    { id: "person1", src: "assets/images/people1.png" },
    { id: "person2", src: "assets/images/people2.png" },
    { id: "person3", src: "assets/images/people3.png" },
    { id: "person4", src: "assets/images/people4.png" },
    { id: "person5", src: "assets/images/people5.png" },
    { id: "kryptonite", src: "assets/images/kryptonite.png" },
    { id: "laser", src: "assets/images/laser.png" },
    { id: "missile", src: "assets/images/missile.png" },
    { id: "buildings2", src: "assets/images/buildings2.png" },
    { id: "buildings3", src: "assets/images/buildings3.png" },
    { id: "buildings1", src: "assets/images/buildings1.png" },
    { id: "points", src: "assets/images/s-logo.png" },
    { id: "ocean", src: "assets/images/dat-to-night.png" },
    { id: "sunmoon", src: "assets/images/sunmoon.png" },
    { id: "superman", src: "assets/images/superman.png" },
    { id: "superman_hori", src: "assets/images/superman.png" },
    { id: "superman_free", src: "assets/images/superman.png" },
    { id: "lex", src: "assets/images/lex.png" },
    { id: "playButton", src: "assets/images/start.png" },
    { id: "tryAgainButton", src: "assets/images/playagain.png" },
    { id: "engine", src: "assets/audio/superman.mp3" },
    { id: "pup", src: "assets/audio/powerup.mp3" },
    { id: "krypto", src: "assets/audio/kryptonite.mp3" },
    { id: "laserr", src: "assets/audio/laser.mp3" }
];
function Preload() {
    assetLoader = new createjs.LoadQueue(); // create a new preloader
    assetLoader.installPlugin(createjs.Sound); // need plugin for sounds
    assetLoader.on("complete", init, this); // when assets finished preloading - then init function
    assetLoader.loadManifest(manifest);
}
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // Enable mouse events
    createjs.Ticker.setFPS(60); // 60 frames per second
    createjs.Ticker.addEventListener("tick", gameLoop);
    currentState = constants.MENU_STATE_LEVEL1;
    changeState(currentState);
}
function gameLoop() {
    if (stateChanged) {
        changeState(currentState);
        stateChanged = false;
    }
    else {
        currentStateFunction.update();
    }
}
function changeState(state) {
    // Launch Various "screens"
    switch (state) {
        case constants.MENU_STATE_LEVEL1:
            // instantiate menu screen
            menu1 = new states.Menu_level1();
            currentStateFunction = menu1;
            break;
        case constants.PLAY_STATE_LEVEL1:
            // instantiate game play screen
            gamePlay1 = new states.GamePlay_level1();
            currentStateFunction = gamePlay1;
            break;
        case constants.MENU_STATE_LEVEL2:
            // instantiate menu screen
            menu2 = new states.Menu_level2();
            currentStateFunction = menu2;
            break;
        case constants.PLAY_STATE_LEVEL2:
            // instantiate game play screen
            gamePlay2 = new states.GamePlay_level2();
            currentStateFunction = gamePlay2;
            break;
        case constants.MENU_STATE_LEVEL3:
            // instantiate menu screen
            menu3 = new states.Menu_level3();
            currentStateFunction = menu3;
            break;
        case constants.PLAY_STATE_LEVEL3:
            // instantiate game play screen
            gamePlay3 = new states.GamePlay_level3();
            currentStateFunction = gamePlay3;
            break;
        case constants.MENU_STATE_LEVEL4:
            // instantiate menu screen
            menu4 = new states.Menu_level4();
            currentStateFunction = menu4;
            break;
        case constants.PLAY_STATE_LEVEL4:
            // instantiate game play screen
            gamePlay4 = new states.GamePlay_level4();
            currentStateFunction = gamePlay4;
            break;
        case constants.GAME_OVER_STATE:
            // instantiate game over screen
            gameOver = new states.GameOver();
            currentStateFunction = gameOver;
            break;
        case constants.GAME_WIN:
            // instantiate game over screen
            gameWin = new states.Win();
            currentStateFunction = gameWin;
            break;
    }
}
//# sourceMappingURL=game.js.map