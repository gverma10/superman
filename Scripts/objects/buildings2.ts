module objects {
    // BUILDINGS2 CLASS
    export class Buildings2 extends objects.GameObject {

        // CONSTRUCTOR
        constructor() {
            super("buildings2");
            this._dx = 3;

            this.reset();
        }

        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
            this.x -= this._dx;
            this._checkBounds();
        }

        // Reset position of buildings to the right
        public reset() {
            this.x = 320;
            this.y = 250;
        }

        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        private _checkBounds() {
            // check if buildings has left the left side of the screen
            if (this.x <= (-320)) {
                this.reset();
            }
        }

    }

}     