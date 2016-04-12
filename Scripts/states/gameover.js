/// <reference path="../objects/buildings1.ts" />
/// <reference path="../objects/buildings2.ts" />
/// <reference path="../objects/buildings3.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/cloud.ts" />
/// <reference path="../objects/cloud1.ts" />
/// <reference path="../objects/cloud2.ts" />
/// <reference path="../objects/cloud3.ts" />
/// <reference path="../objects/cloud4.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/kryptonite.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/laser.ts" />
/// <reference path="../objects/lex.ts" />
/// <reference path="../objects/missile.ts" />
/// <reference path="../objects/ocean.ts" />
/// <reference path="../objects/person1.ts" />
/// <reference path="../objects/person2.ts" />
/// <reference path="../objects/person3.ts" />
/// <reference path="../objects/person4.ts" />
/// <reference path="../objects/person5.ts" />
/// <reference path="../objects/points.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/sunmoon.ts" />
/// <reference path="../objects/superman.ts" />
/// <reference path="../objects/superman_free.ts" />
/// <reference path="../objects/superman_hori.ts" />
/// <reference path="../constants.ts" />
/// <reference path="../game.ts" />
var states;
(function (states) {
    // GAME OVER STATE CLASS
    var GameOver = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function GameOver() {
            this.tryAgain = false;
            // Instantiate Game Container
            this.game = new createjs.Container();
            //Ocean object
            this.ocean = new objects.Ocean();
            this.game.addChild(this.ocean);
            //Game Over Label
            this.gameOverLabel = new objects.Label(320, 40, "GAME OVER");
            this.gameOverLabel.font = "60px Consolas";
            this.gameOverLabel.regX = this.gameOverLabel.getMeasuredWidth() * 0.5;
            this.gameOverLabel.regY = this.gameOverLabel.getMeasuredLineHeight() * 0.5;
            this.game.addChild(this.gameOverLabel);
            //Final Score Label
            this.finalScoreLabel = new objects.Label(320, 120, ("FINAL SCORE: " + currentScore));
            this.game.addChild(this.finalScoreLabel);
            //High Score Label
            this.highScoreLabel = new objects.Label(320, 200, ("HIGH SCORE: " + highScore));
            this.game.addChild(this.highScoreLabel);
            //Try Again Button
            this.tryAgainButton = new objects.Button(320, 280, "tryAgainButton");
            this.tryAgainButton.on("click", this.tryAgainClicked, this);
            this.game.addChild(this.tryAgainButton);
            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor
        GameOver.prototype.tryAgainClicked = function () {
            this.tryAgain = true;
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        GameOver.prototype.update = function () {
            this.ocean.update();
            if (this.tryAgain) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.PLAY_STATE_LEVEL1;
                stateChanged = true;
            }
            stage.update(); // Refreshes our stage
        }; // Update Method
        return GameOver;
    })();
    states.GameOver = GameOver; // Game Over Class
})(states || (states = {})); // States Module
//# sourceMappingURL=gameover.js.map