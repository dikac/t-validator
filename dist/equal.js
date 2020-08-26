(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./validatable/equal"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const equal_1 = require("./validatable/equal");
    /**
     * {@template Base} type which can be handled by implmentation
     * {@template Type} valid value type
     */
    class Equal {
        constructor(value, message) {
            this.value = value;
            this.message = message;
        }
        validate(value) {
            return equal_1.default(value, this.value, this.message);
        }
    }
    exports.default = Equal;
});
//# sourceMappingURL=equal.js.map