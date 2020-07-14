(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./record/recursive/validate", "@dikac/t-validatable/record/recursive/boolean/and"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const validate_1 = require("./record/recursive/validate");
    const and_1 = require("@dikac/t-validatable/record/recursive/boolean/and");
    class Record {
        constructor(validators) {
            this.validators = validators;
            this.guardProperty(validators);
        }
        guardProperty(object) {
            if ('valid' in object) {
                throw new Error(`property "valid" is reserved`);
            }
        }
        validate(value) {
            let results = validate_1.default(this.validators, value);
            return {
                value: results,
                // @ts-ignore
                valid: and_1.default(results)
            };
        }
    }
    exports.default = Record;
});
//# sourceMappingURL=record.js.map