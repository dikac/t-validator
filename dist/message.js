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
    class Message {
        constructor(validator, result) {
            this.validator = validator;
            this.result = result;
        }
        validate(value) {
            return this.result(value, this.validator(value));
        }
    }
    exports.default = Message;
});
//# sourceMappingURL=message.js.map