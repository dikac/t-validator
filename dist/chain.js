(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-validatable/message/array"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const array_1 = require("@dikac/t-validatable/message/array");
    class Chain {
        constructor(validators) {
            this.validators = validators;
        }
        validate(value) {
            let temps = [];
            for (let validator of this.validators) {
                temps.push(validator.validate(value));
            }
            return new array_1.default(value, temps);
        }
    }
    exports.default = Chain;
});
//# sourceMappingURL=chain.js.map