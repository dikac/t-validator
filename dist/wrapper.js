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
     * wrapper for {@link Validator}
     */
    class Wrapper {
        constructor(subject) {
            this.subject = subject;
        }
        validate(value) {
            return this.subject.validate(value);
        }
    }
    exports.default = Wrapper;
});
//# sourceMappingURL=wrapper.js.map