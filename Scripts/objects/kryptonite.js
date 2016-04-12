var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // KRYPTONITE CLASS
    var Kryptonite = (function (_super) {
        __extends(Kryptonite, _super);
        // CONSTRUCTOR
        function Kryptonite() {
            _super.call(this, "kryptonite");
            this.sound = "krypto";
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Kryptonite.prototype.update = function () {
            this.y += this._dy;
            this.x -= this._dx;
            this._checkBounds();
        };
        // Reset position of island to the top
        Kryptonite.prototype.reset = function () {
            this.x = 640 + this.width;
            this.y = Math.floor(Math.random() * 380) + 10;
            this._dx = Math.floor(Math.random() * 5) + 5;
            this._dy = Math.floor(Math.random() * 4) - 2;
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Kryptonite.prototype._checkBounds = function () {
            // check if island has left the side of the screen
            if (this.x <= (0 - this.width)) {
                this.reset();
            }
        };
        return Kryptonite;
    })(objects.GameObject);
    objects.Kryptonite = Kryptonite;
})(objects || (objects = {}));
//# sourceMappingURL=kryptonite.js.map