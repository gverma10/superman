module objects {
    // CLOUD CLASS
    export class Person2 extends objects.GameObject {

        // CONSTRUCTOR
        constructor() {
            super("person2");
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
            this.y = 0 - this.height;
            this.x = Math.floor(Math.random() * 700) + 25;
            this._dy = Math.floor(Math.random() * 5) + 2;
            this._dx = Math.floor(Math.random());
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        private _checkBounds() {
            // check if island has left the side of the screen
            if (this.y >= (460 + this.height)) {
                this.reset();
            }
        }

    }

}   