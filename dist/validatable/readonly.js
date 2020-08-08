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
    function Readonly(value, valid, message) {
        return {
            get value() {
                return value;
            },
            get valid() {
                return valid;
            },
            get message() {
                return message;
            }
        };
    }
    exports.default = Readonly;
});
//# sourceMappingURL=readonly.js.map