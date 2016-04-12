var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // LASER CLASS
    var Laser = (function (_super) {
        __extends(Laser, _super);
        // CONSTRUCTOR
        function Laser() {
            _super.call(this, "laser");
            this.sound = "laserr";
            this._dy = 30;
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Laser.prototype.update = function () {
            this.x -= this._dy;
            this._checkBounds();
        };
        // Reset position of island to the top
        Laser.prototype.reset = function () {
            this.x = 640 + this.width;
            this.y = Math.floor(Math.random() * 480);
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Laser.prototype._checkBounds = function () {
            // check if island has left the bottom of the screen
            if (this.x <= (450 - this.width)) {
                this.reset();
            }
        };
        return Laser;
    })(objects.GameObject);
    objects.Laser = Laser;
})(objects || (objects = {}));
//# sourceMappingURL=laser.js.map