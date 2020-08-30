(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const callback_1 = require("./callback");
    function CallbackFunction(value, validation, message) {
        return new callback_1.default(value, validation, message);
    }
    exports.default = CallbackFunction;
});
//# sourceMappingURL=callback-function.js.map