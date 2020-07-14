(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/boolean/type", "@dikac/t-object/message/string/property-actual"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const type_1 = require("@dikac/t-object/boolean/type");
    const property_actual_1 = require("@dikac/t-object/message/string/property-actual");
    function validate(validators, values) {
        let object = {};
        for (let property in validators) {
            const validator = validators[property];
            const value = values[property];
            if (Validator(validator)) {
                object[property] = validator.validate(value);
                continue;
            }
            if (type_1.default(validator) && type_1.default(value)) {
                // @ts-ignore
                object[property] = validate(validator, value);
                continue;
            }
            throw new Error(property_actual_1.default(property, 'validator or record of validator', validator + ''));
        }
        return object;
    }
    exports.default = validate;
});
//# sourceMappingURL=validate.js.map