(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./validatable/callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const callback_1 = require("./validatable/callback");
    class Callbacks {
        constructor(message, validation) {
            this.message = message;
            this.validation = validation;
        }
        //validate<Argument extends Base>(value: Argument) : Replace<Argument, false, Instance<Base, MessageT>>;
        validate(value) {
            return callback_1.default(value, this.validation, this.message);
        }
    }
    exports.default = Callbacks;
});
//# sourceMappingURL=callbacks.js.map