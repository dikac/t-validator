(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/boolean/type", "@dikac/t-function/boolean/type"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const type_1 = require("@dikac/t-object/boolean/type");
    const type_2 = require("@dikac/t-function/boolean/type");
    function Type(value) {
        if (!type_1.default(value)) {
            return false;
        }
        if (!type_2.default(value.validate)) {
            return false;
        }
        return true;
    }
    exports.default = Type;
});
//# sourceMappingURL=Type.js.map