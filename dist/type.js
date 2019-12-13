(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Type {
        constructor(result) {
            this.result = result;
        }
        validate(value) {
            return this.result(value);
        }
    }
    exports.default = Type;
});
//# sourceMappingURL=type.js.map