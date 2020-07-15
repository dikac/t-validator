(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/validator", "@dikac/t-object/boolean/object"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const validator_1 = require("../../boolean/validator");
    const object_1 = require("@dikac/t-object/boolean/object");
    function Validate(validators, values) {
        let object = {};
        for (let property in validators) {
            const validator = validators[property];
            const value = values[property];
            if (validator_1.default(validator)) {
                // @ts-ignore
                object[property] = validator.validate(value);
                continue;
            }
            if (object_1.default(validator) && object_1.default(value)) {
                // @ts-ignore
                object[property] = Validate(validator, value);
                continue;
            }
            throw new Error(`property ${property} is not validator or record of validator`);
        }
        return object;
    }
    exports.default = Validate;
});
//# sourceMappingURL=validate.js.map