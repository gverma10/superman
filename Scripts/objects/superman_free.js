var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // SUPERMAN CLASS
    var Superman_free = (function (_super) {
        __extends(Superman_free, _super);
        // CONSTRUCTOR
        function Superman_free() {
            _super.call(this, assetLoader.getResult("superman_free"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            createjs.Sound.play("engine", { loop: -1 });
        }
        // PUBLIC METHODS
        Superman_free.prototype.update = function () {
            this.x = stage.mouseX;
            this.y = stage.mouseY;
        };
        return Superman_free;
    })(createjs.Bitmap);
    objects.Superman_free = Superman_free;
})(objects || (objects = {}));
//# sourceMappingURL=superman_free.js.map