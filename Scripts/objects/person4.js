var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // CLOUD CLASS
    var Person4 = (function (_super) {
        __extends(Person4, _super);
        // CONSTRUCTOR
        function Person4() {
            _super.call(this, "person4");
            //this.sound = "thunder";
            this.reset();
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        Person4.prototype.update = function () {
            this.y += this._dy;
            this.x -= this._dx;
            this._checkBounds();
        };
        // Reset position of island to the top
        Person4.prototype.reset = function () {
            this.y = 0 - this.height;
            this.x = Math.floor(Math.random() * 700) + 25;
            this._dy = Math.floor(Math.random() * 5) + 2;
            this._dx = Math.floor(Math.random());
        };
        // PRIVATE METHODS +++++++++++++++++++++++++++++++++++++++++
        Person4.prototype._checkBounds = function () {
            // check if island has left the side of the screen
            if (this.y >= (460 + this.height)) {
                this.reset();
            }
        };
        return Person4;
    })(objects.GameObject);
    objects.Person4 = Person4;
})(objects || (objects = {}));
//# sourceMappingURL=person4.js.map