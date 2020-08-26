(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/value/value/memoize-getter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const memoize_getter_1 = require("@dikac/t-object/value/value/memoize-getter");
    function Equal(value, type, message) {
        const base = {
            get value() {
                return [value, type];
            },
            get valid() {
                return value === type;
            },
        };
        return {
            get value() {
                return value;
            },
            get valid() {
                return base.valid;
            },
            get message() {
                return memoize_getter_1.default(this, 'message', () => message(base));
            }
        };
    }
    exports.default = Equal;
});
//# sourceMappingURL=equal.js.map