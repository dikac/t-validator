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
    class Result {
        constructor(data, valid = false) {
            this.data = data;
            this.valid = valid;
        }
        get message() {
            return this.getMessage(this.data, this.valid);
        }
        get value() {
            if (this.valid) {
                return this.data;
            }
            else {
                throw new Error(this.message);
            }
        }
    }
    exports.default = Result;
});
//# sourceMappingURL=result.js.map