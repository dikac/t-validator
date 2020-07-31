(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-function/memoize"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const memoize_1 = require("@dikac/t-function/memoize");
    class Callbacks {
        constructor(message, validation) {
            this.message = message;
            this.validation = validation;
        }
        validate(value) {
            const valid = this.validation(value);
            const result = {
                get valid() {
                    return valid;
                },
                get value() {
                    return value;
                }
            };
            let message = memoize_1.default(this.message, result);
            Object.defineProperty(result, 'message', {
                get: message
            });
            return result;
        }
    }
    exports.default = Callbacks;
});
//# sourceMappingURL=callbacks.js.map