(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./validatable/callback-function"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const callback_function_1 = require("./validatable/callback-function");
    class Callbacks {
        constructor(validation, message) {
            this.validation = validation;
            this.message = message;
        }
        validate(value) {
            return callback_function_1.default(value, this.validation, this.message);
        }
    }
    exports.default = Callbacks;
});
//# sourceMappingURL=callbacks.js.map