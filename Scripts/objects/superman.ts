
module objects {
    // SUPERMAN CLASS
    export class Superman extends createjs.Bitmap {
        public width: number;
        public height: number;
        // CONSTRUCTOR
        constructor() {
            super(assetLoader.getResult("superman"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.x = 80;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            createjs.Sound.play("engine", { loop: -1 });
        }

        // PUBLIC METHODS
        public update() {
            this.y = stage.mouseY;
        }

    }

}   