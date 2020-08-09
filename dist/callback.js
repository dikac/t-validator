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
    class Callback {
        constructor(functions) {
            this.functions = functions;
        }
        validate(value) {
            return this.functions(value);
        }
    }
    exports.default = Callback;
});
//# sourceMappingURL=callback.js.map