var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // BUILDINGS3 CLASS
    var Buildings3 = (function (_super) {
        __extends(Buildings3, _super);
        //CONSTRUCTOR
        function Buildings3() {
            _super.call(this, "buildings3");
            this._dx = 4;
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Buildings3.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        // Reset position of buildings
        Buildings3.prototype.reset = function () {
            this.x = 320;
            this.y = 255;
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Buildings3.prototype._checkBounds = function () {
            // check if buildings has left the left side of the screen
            if (this.x <= (-321)) {
                this.reset();
            }
        };
        return Buildings3;
    })(objects.GameObject);
    objects.Buildings3 = Buildings3;
})(objects || (objects = {}));
//# sourceMappingURL=buildings3.js.map