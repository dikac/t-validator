(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../string/valid"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const valid_1 = require("../string/valid");
    function Valid(object, throwable = (o) => new Error(valid_1.default(o))) {
        return throwable(object);
    }
    exports.default = Valid;
});
//# sourceMappingURL=valid.js.map