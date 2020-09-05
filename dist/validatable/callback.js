(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/value/set-getter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const set_getter_1 = require("@dikac/t-object/value/set-getter");
    class Callback {
        constructor(value, validation, _message) {
            this.value = value;
            this.validation = validation;
            this._message = _message;
        }
        get valid() {
            return set_getter_1.default(this, 'valid', this.validation(this.value));
        }
        get message() {
            return set_getter_1.default(this, 'message', this._message(this));
        }
    }
    exports.default = Callback;
});
//# sourceMappingURL=callback.js.map