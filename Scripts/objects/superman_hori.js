var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // SUPERMAN CLASS
    var Superman_hori = (function (_super) {
        __extends(Superman_hori, _super);
        // CONSTRUCTOR
        function Superman_hori() {
            _super.call(this, assetLoader.getResult("superman_hori"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.y = 400;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            createjs.Sound.play("engine", { loop: -1 });
        }
        // PUBLIC METHODS
        Superman_hori.prototype.update = function () {
            this.x = stage.mouseX;
        };
        return Superman_hori;
    })(createjs.Bitmap);
    objects.Superman_hori = Superman_hori;
})(objects || (objects = {}));
//# sourceMappingURL=superman_hori.js.map