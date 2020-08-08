(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../throwable/valid"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const valid_1 = require("../throwable/valid");
    /**
     * Throw exception if given value is not {@link ValidatableInterface} type
     */
    function Valid(value, error = valid_1.default) {
        if (!value.valid) {
            throw error(value);
        }
    }
    exports.default = Valid;
});
//# sourceMappingURL=valid.js.map