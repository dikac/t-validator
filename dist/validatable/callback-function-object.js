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
    function CallbackFunctionObject(object) {
        return new callback_1.default(object.value, object.validation, object.message);
    }
    exports.default = CallbackFunctionObject;
});
//# sourceMappingURL=callback-function-object.js.map