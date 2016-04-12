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
/// <reference path="../objects/superman_hori.ts" />
/// <reference path="../objects/superman_free.ts" />
/// <reference path="../constants.ts" />
/// <reference path="../game.ts" />
var states;
(function (states) {
    // MENU STATE CLASS
    var Menu_level4 = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Menu_level4() {
            this.play = false;
            // Instantiate Game Container
            this.game = new createjs.Container();
            //Ocean object
            this.ocean = new objects.Ocean();
            this.game.addChild(this.ocean);
            //Game Over Label
            this.mailPilotLabel = new objects.Label(320, 40, "MAN OF STEEL");
            this.mailPilotLabel.font = "60px Consolas";
            this.mailPilotLabel.regX = this.mailPilotLabel.getMeasuredWidth() * 0.5;
            this.mailPilotLabel.regY = this.mailPilotLabel.getMeasuredLineHeight() * 0.5;
            this.game.addChild(this.mailPilotLabel);
            this.mailPilotLabel1 = new objects.Label(280, 170, "You have to save Superman from the \n\nKryptonites and help Superman gain\n\nback his strength by collecting 'S'");
            this.mailPilotLabel1.font = "24px Consolas";
            this.mailPilotLabel1.regX = this.mailPilotLabel.getMeasuredWidth() * 0.5;
            this.mailPilotLabel1.regY = this.mailPilotLabel.getMeasuredLineHeight() * 0.5;
            this.game.addChild(this.mailPilotLabel1);
            //Play Button
            this.playButton = new objects.Button(320, 350, "playButton");
            this.playButton.on("click", this.playClicked, this);
            this.game.addChild(this.playButton);
            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor
        Menu_level4.prototype.playClicked = function () {
            this.play = true;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Menu_level4.prototype.update = function () {
            this.ocean.update();
            if (this.play) {
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.PLAY_STATE_LEVEL4;
                stateChanged = true;
            }
            stage.update(); // Refreshes our stage
        }; // Update Method
        return Menu_level4;
    })();
    states.Menu_level4 = Menu_level4; // Menu Class
})(states || (states = {})); // States Module
//# sourceMappingURL=menu_level4.js.map