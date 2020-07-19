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
        constructor(subject, filter) {
            this.subject = subject;
            this.filter = filter;
        }
        validate(value) {
            let validatable = this.subject.validate(value);
            return this.filter(validatable, value);
        }
    }
    exports.default = Filter;
});
//# sourceMappingURL=filter.js.map