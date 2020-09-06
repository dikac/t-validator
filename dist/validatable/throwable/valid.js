(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-message/message/value", "@dikac/t-string/safe-cast", "@dikac/t-function/new"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const value_1 = require("@dikac/t-message/message/value");
    const safe_cast_1 = require("@dikac/t-string/safe-cast");
    const new_1 = require("@dikac/t-function/new");
    function Valid(result, conversion = (result) => safe_cast_1.default(value_1.default(result)), throwable = new_1.default(Error)) {
        return throwable(conversion(result));
    }
    exports.default = Valid;
});
//# sourceMappingURL=valid.js.map