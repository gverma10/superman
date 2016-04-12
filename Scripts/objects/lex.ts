
module objects {
    // SUPERMAN CLASS
    export class Lex extends createjs.Bitmap {
        public width: number;
        public height: number;
        // CONSTRUCTOR
        constructor() {
            super(assetLoader.getResult("lex"));

            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            //this.y = 440;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            createjs.Sound.play("engine", { loop: -1 });
        }

        // PUBLIC METHODS
        public update() {
            this.x = stage.mouseY + 100;
            this.y = stage.mouseX + 50;
        }

    }

}   