(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-boolean/equal", "./callback", "./readonly-merge"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const equal_1 = require("@dikac/t-boolean/equal");
    const callback_1 = require("./callback");
    const readonly_merge_1 = require("./readonly-merge");
    function Equal(value, type, message) {
        const bs = new callback_1.default([type, value], (values) => equal_1.default(...values), message);
        return new readonly_merge_1.default({ value: value }, bs, bs);
    }
    exports.default = Equal;
});
//# sourceMappingURL=equal.js.map