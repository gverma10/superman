
module objects {
    // SUPERMAN CLASS
    export class Superman_hori extends createjs.Bitmap {
        public width: number;
        public height: number;
        // CONSTRUCTOR
        constructor() {
            super(assetLoader.getResult("superman_hori"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.y = 400;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            createjs.Sound.play("engine", { loop: -1 });
        }

        // PUBLIC METHODS
        public update() {
            this.x = stage.mouseX;
        }

    }

}    