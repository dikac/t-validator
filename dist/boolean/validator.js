(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-function/boolean/function"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const function_1 = require("@dikac/t-function/boolean/function");
    function Validator(value) {
        if (!function_1.default(value.validate)) {
            return false;
        }
        return true;
    }
    exports.default = Validator;
});
//# sourceMappingURL=validator.js.map