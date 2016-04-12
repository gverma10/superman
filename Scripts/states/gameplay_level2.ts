
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

module states {

    export class GamePlay_level2 {
        // Game Objects 
        public game: createjs.Container;
        public scoreboard: objects.ScoreBoard;
        public superman: objects.Superman;
        public points: objects.Points;
        public clouds: objects.Cloud;
        public cloud1: objects.Cloud1;
        public cloud2: objects.Cloud2;
        public cloud3: objects.Cloud3;
        public cloud4: objects.Cloud4;
        public buildings1: objects.Buildings1;
        public buildings2: objects.Buildings2;
        public buildings3: objects.Buildings3;
        public kryptonite: objects.Kryptonite[] = [];
        public laser: objects.Laser;
        public ocean: objects.Ocean;
        public sunmoon: objects.SunMoon;

        constructor() {
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
            this.points = new objects.Points();
            this.game.addChild(this.points);
            
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
            
            //Plane object
            this.superman = new objects.Superman();
            this.game.addChild(this.superman);
           
            //kryptonite Swrids object
            for (var kryptoniteno = 3; kryptoniteno >= 0; kryptoniteno--) {
                this.kryptonite[kryptoniteno] = new objects.Kryptonite();
                this.game.addChild(this.kryptonite[kryptoniteno]);
            }

            //laser beam object
            this.laser = new objects.Laser();
            this.game.addChild(this.laser);
           
            // Instantiate Scoreboard
            this.scoreboard = new objects.ScoreBoard(this.game);

            // Add Game Container to Stage
            stage.addChild(this.game);
        } // Constructor


        // DISTANCE CHECKING METHOD
        public distance(p1: createjs.Point, p2: createjs.Point): number {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        } //Distance Method

        // CHECK COLLISION METHOD
        public checkCollision(collider: objects.GameObject) {
            if (this.scoreboard.active) {
                var planePosition: createjs.Point = new createjs.Point(this.superman.x, this.superman.y);
                var objectPosition: createjs.Point = new createjs.Point(collider.x, collider.y);
                var theDistance = this.distance(planePosition, objectPosition);
                if (theDistance < ((this.superman.height * 0.5) + (collider.height * 0.5))) {
                    if (collider.isColliding != true) {
                        createjs.Sound.play(collider.sound);
                        if (collider.name == "kryptonite") {
                            this.scoreboard.lives--;
                        }

                        if (collider.name == "points") {
                            this.scoreboard.score += 10;
                            this.points.reset();
                            this.points.update();
                            createjs.Sound.play(collider.sound);
                        }

                        if (collider.name == "laser") {
                            this.scoreboard.lives++;
                            this.scoreboard.score -= 0;
                            this.laser.reset();
                            this.laser.update();

                        }
                    }
                    collider.isColliding = true;
                } else {
                    collider.isColliding = false;
                }
            }
        } // checkCollision Method

        public update() {

            this.ocean.update();

            this.sunmoon.update();

            this.buildings1.update();

            this.buildings2.update();

            this.buildings3.update();

            this.points.update();

            this.superman.update();

            /*for (var cloud = 2; cloud >= 0; cloud--) {
                this.clouds[cloud].update();

                this.checkCollision(this.clouds[cloud]);
            }*/
            this.clouds.update();

            this.cloud1.update();

            this.cloud2.update();

            this.cloud3.update();

            this.cloud4.update();

            this.checkCollision(this.points);

            for (var kryptoniteno = 3; kryptoniteno >= 0; kryptoniteno--) {
                this.kryptonite[kryptoniteno].update();

                this.checkCollision(this.kryptonite[kryptoniteno]);
            }

            this.laser.update();

            this.checkCollision(this.laser);

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

            if (this.scoreboard.score > 60) {
                this.scoreboard.active = false;

                this.game.removeAllChildren();
                stage.removeChild(this.game);
                currentState = constants.MENU_STATE_LEVEL3;
                stateChanged = true;
            }

            stage.update(); // Refreshes our stage

        } // Update Method

    } // GamePlay Class


} // States Module 