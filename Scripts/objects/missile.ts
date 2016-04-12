﻿module objects {
    // CLOUD CLASS
    export class Missile extends objects.GameObject {

        // CONSTRUCTOR
        constructor() {
            super("missile");
            //this.sound = "thunder";
            this.reset();
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
            this.y += this._dy;
            this.x -= this._dx;

            this._checkBounds();
        }

        // Reset position of island to the top
        public reset() {
            this.x = stage.mouseY + 100;
            //this.y = Math.floor(Math.random() * 380) + 10;
            this.y = stage.mouseX + 30;
            this._dx = Math.floor(Math.random() * 5) + 5;
            this._dy = Math.floor(Math.random() * 4) - 2;
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        private _checkBounds() {
            // check if island has left the side of the screen
            if (this.x <= (0 - this.width)) {
                this.reset();
            }
        }

    }

}     