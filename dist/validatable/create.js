(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function Create(value, valid, message) {
        return {
            message: message,
            valid: valid,
            value: value
        };
    }
    exports.default = Create;
});
//# sourceMappingURL=create.js.map