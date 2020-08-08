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
    /**
     * wrapper for {@link Simple}
     */
    class Wrapper {
        constructor(validator) {
            this.validator = validator;
        }
        validate(value) {
            return this.validator.validate(value);
        }
    }
    exports.default = Wrapper;
});
//# sourceMappingURL=wrapper.js.map