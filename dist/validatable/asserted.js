(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./readonly-wrapper", "./throwable/valid"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const readonly_wrapper_1 = require("./readonly-wrapper");
    const valid_1 = require("./throwable/valid");
    /**
     * @inheritDoc {@link ReadonlyWrapper}
     *
     * throw exception when {@link Validatable} is in valid (false) when
     * accessing value {@link Value}
     */
    class Asserted extends readonly_wrapper_1.default {
        /**
         * @param subject
         * @param error
         */
        constructor(subject, error = valid_1.default) {
            super(subject);
            this.error = error;
        }
        get value() {
            if (!this.valid) {
                throw this.error(this.subject);
            }
            return this.subject.value;
        }
    }
    exports.default = Asserted;
});
//# sourceMappingURL=asserted.js.map