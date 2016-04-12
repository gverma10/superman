var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // BUILDINGS1 CLASS
    var Buildings1 = (function (_super) {
        __extends(Buildings1, _super);
        // CONSTRUCTOR
        function Buildings1() {
            _super.call(this, "buildings1");
            this._dx = 1;
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Buildings1.prototype.update = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        // Reset position of buildings to the right
        Buildings1.prototype.reset = function () {
            this.x = 320;
            this.y = 250;
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Buildings1.prototype._checkBounds = function () {
            // check if buildings has left the left side of the screen
            if (this.x <= (-320)) {
                this.reset();
            }
        };
        return Buildings1;
    })(objects.GameObject);
    objects.Buildings1 = Buildings1;
})(objects || (objects = {}));
//# sourceMappingURL=buildings1.js.map