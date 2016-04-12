var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // SUPERMAN CLASS
    var Superman = (function (_super) {
        __extends(Superman, _super);
        // CONSTRUCTOR
        function Superman() {
            _super.call(this, assetLoader.getResult("superman"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.x = 80;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            createjs.Sound.play("engine", { loop: -1 });
        }
        // PUBLIC METHODS
        Superman.prototype.update = function () {
            this.y = stage.mouseY;
        };
        return Superman;
    })(createjs.Bitmap);
    objects.Superman = Superman;
})(objects || (objects = {}));
//# sourceMappingURL=superman.js.map