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
    var GamePlay_level3 = (function () {
        function GamePlay_level3() {
            // Instantiate Game Container
            this.game = new createjs.Container();
            //this.cloud1 = new objects.Island();
            //this.game.addChild(this.cloud1);
            //Ocean object
            this.ocean = new objects.Ocean();
            this.game.addChild(this.ocean);
            //SunMoon object
            this.sunmoon = new objects.SunMoon();
            this.game.addChild(this.sunmoon);
            //Mountains object
            this.buildings1 = new objects.Buildings1();
            this.game.addChild(this.buildings1);
            //Bushes object
            this.buildings2 = new objects.Buildings2();
            this.game.addChild(this.buildings2);
            //Bushes object
            this.buildings3 = new objects.Buildings3();
            this.game.addChild(this.buildings3);
            //Bubbles object
            //this.points = new objects.Points();
            //this.game.addChild(this.points);
            //Cloud object
            /*for (var cloud = 2; cloud >= 0; cloud--) {
                this.clouds[cloud] = new objects.Cloud();
                this.game.addChild(this.clouds[cloud]);
            }*/
            this.clouds = new objects.Cloud();
            this.game.addChild(this.clouds);
            //Cloud1 object
            this.cloud1 = new objects.Cloud1();
            this.game.addChild(this.cloud1);
            //Cloud2 object
            this.cloud2 = new objects.Cloud2();
            this.game.addChild(this.cloud2);
            //Cloud3 object
            this.cloud3 = new objects.Cloud3();
            this.game.addChild(this.cloud3);
            //Cloud4 object
            this.cloud4 = new objects.Cloud4();
            this.game.addChild(this.cloud4);
            //Person object
            this.person1 = new objects.Person1();
            this.game.addChild(this.person1);
            //Person object
            this.person2 = new objects.Person2();
            this.game.addChild(this.person2);
            //Person object
            this.person3 = new objects.Person3();
            this.game.addChild(this.person3);
            //Person object
            this.person4 = new objects.Person4();
            this.game.addChild(this.person4);
            //Person object
            this.person5 = new objects.Person5();
            this.game.addChild(this.person5);
            //Plane object
            this.superman_hori = new objects.Superman_hori();
            this.game.addChild(this.superman_hori);
            // Instantiate Scoreboard
            this.scoreboard = new objects.ScoreBoard(this.game);
            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor
        // DISTANCE CHECKING METHOD
        GamePlay_level3.prototype.distance = function (p1, p2) {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        }; //Distance Method
        // CHECK COLLISION METHOD
        GamePlay_level3.prototype.checkCollision = function (collider) {
            if (this.scoreboard.active) {
                var planePosition = new createjs.Point(this.superman_hori.x, this.superman_hori.y);
                var objectPosition = new createjs.Point(collider.x, collider.y);
                var theDistance = this.distance(planePosition, objectPosition);
                if (theDistance < ((this.superman_hori.height * 0.5) + (collider.height * 0.5))) {
                    if (collider.isColliding != true) {
                        //createjs.Sound.play(collider.sound);
                        //if (collider.name == "kryptonite") {
                        //    this.scoreboard.lives--;
                        //}
                        //if (collider.name == "points") {
                        //    this.scoreboard.score += 10;
                        //    this.points.reset();
                        //    this.points.update();
                        //}
                        if (collider.name == "person1") {
                            this.scoreboard.score += 10;
                            this.person1.reset();
                            this.person1.update();
                        }
                        if (collider.name == "person2") {
                            this.scoreboard.score += 10;
                            this.person2.reset();
                            this.person2.update();
                        }
                        if (collider.name == "person3") {
                            this.scoreboard.score += 10;
                            this.person3.reset();
                            this.person3.update();
                        }
                        if (collider.name == "person4") {
                            this.scoreboard.score += 10;
                            this.person4.reset();
                            this.person4.update();
                        }
                        if (collider.name == "person5") {
                            this.scoreboard.score += 10;
                            this.person5.reset();
                            this.person5.update();
                        }
                    }
                    collider.isColliding = true;
                }
                else {
                    collider.isColliding = false;
                }
            }
        }; // checkCollision Method
        GamePlay_level3.prototype.update = function () {
            this.ocean.update();
            this.sunmoon.update();
            this.buildings1.update();
            this.buildings2.update();
            this.buildings3.update();
            //this.points.update();
            this.superman_hori.update();
            /*for (var cloud = 2; cloud >= 0; cloud--) {
                this.clouds[cloud].update();

                this.checkCollision(this.clouds[cloud]);
            }*/
            this.clouds.update();
            this.cloud1.update();
            this.cloud2.update();
            this.cloud3.update();
            this.cloud4.update();
            this.person1.update();
            this.person2.update();
            this.person3.update();
            this.person4.update();
            this.person5.update();
            //this.checkCollision(this.points);
            this.checkCollision(this.person1);
            this.checkCollision(this.person2);
            this.checkCollision(this.person3);
            this.checkCollision(this.person4);
            this.checkCollision(this.person5);
            for (var kryptoniteno = 3; kryptoniteno >= 0; kryptoniteno--) {
            }
            this.scoreboard.update();
            if (this.scoreboard.lives < 1) {
                this.scoreboard.active = false;
                createjs.Sound.stop();
                currentScore = this.scoreboard.score;
                if (currentScore > highScore) {
                    highScore = currentScore;
                }
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.GAME_OVER_STATE;
                stateChanged = true;
            }
            if (this.scoreboard.score > 90) {
                this.scoreboard.active = false;
                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.MENU_STATE_LEVEL4;
                stateChanged = true;
            }
            stage.update(); // Refreshes our stage
        }; // Update Method
        return GamePlay_level3;
    })();
    states.GamePlay_level3 = GamePlay_level3; // GamePlay Class
})(states || (states = {})); // States Module
//# sourceMappingURL=gameplay_level3.js.map