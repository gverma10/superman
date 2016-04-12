module objects {
    // BUILDINGS3 CLASS
    export class Buildings3 extends objects.GameObject {

        //CONSTRUCTOR
        constructor() {
            super("buildings3");

            this._dx = 4;

            this.reset();
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
            this.x -= this._dx;
            this._checkBounds();
        }

        // Reset position of buildings
        public reset() {
            this.x = 320;
            this.y = 255;
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        private _checkBounds() {
            // check if buildings has left the left side of the screen
            if (this.x <= (-321)) {
                this.reset();
            }
        }

    }

}      