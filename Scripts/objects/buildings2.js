var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // BUILDINGS2 CLASS
    var Buildings2 = (function (_super) {
        __extends(Buildings2, _super);
        // CONSTRUCTOR
        function Buildings2() {
            _super.call(this, "buildings2");
            this._dx = 3;
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Buildings2.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        // Reset position of buildings to the right
        Buildings2.prototype.reset = function () {
            this.x = 320;
            this.y = 250;
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Buildings2.prototype._checkBounds = function () {
            // check if buildings has left the left side of the screen
            if (this.x <= (-320)) {
                this.reset();
            }
        };
        return Buildings2;
    })(objects.GameObject);
    objects.Buildings2 = Buildings2;
})(objects || (objects = {}));
//# sourceMappingURL=buildings2.js.map