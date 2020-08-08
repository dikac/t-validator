(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-validatable/readonly-wrapper"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const readonly_wrapper_1 = require("@dikac/t-validatable/readonly-wrapper");
    /**
     * read only wrapper for {@link Message}, {@link Value} and {@link ValidatableInterface}
     */
    class ReadonlyWrapper extends readonly_wrapper_1.default {
        get message() {
            return this.subject.message;
        }
        get value() {
            return this.subject.value;
        }
    }
    exports.default = ReadonlyWrapper;
});
//# sourceMappingURL=readonly-wrapper.js.map