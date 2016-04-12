var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // SUPERMAN CLASS
    var Lex = (function (_super) {
        __extends(Lex, _super);
        // CONSTRUCTOR
        function Lex() {
            _super.call(this, assetLoader.getResult("lex"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            //this.y = 440;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            createjs.Sound.play("engine", { loop: -1 });
        }
        // PUBLIC METHODS
        Lex.prototype.update = function () {
            this.x = stage.mouseY + 100;
            this.y = stage.mouseX + 50;
        };
        return Lex;
    })(createjs.Bitmap);
    objects.Lex = Lex;
})(objects || (objects = {}));
//# sourceMappingURL=lex.js.map