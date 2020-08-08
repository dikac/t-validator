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
    function Valid(object) {
        if (object.valid) {
            return `Validatable is valid`;
        }
        else {
            return `Validatable is not valid`;
        }
    }
    exports.default = Valid;
});
//# sourceMappingURL=valid.js.map