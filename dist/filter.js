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
    class Filter {
        constructor(validator, filter) {
            this.validator = validator;
            this.filter = filter;
        }
        validate(value) {
            let validatable = this.validator.validate(value);
            return this.filter(validatable, value);
        }
    }
    exports.default = Filter;
});
//# sourceMappingURL=filter.js.map