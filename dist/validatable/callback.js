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
    function Callback(value, validation, message) {
        return {
            get value() {
                return value;
            },
            get valid() {
                let value = validation(this.value);
                return Object.defineProperty(this, 'valid', {
                    get() {
                        return value;
                    }
                }).valid;
            },
            get message() {
                let value = message(this);
                return Object.defineProperty(this, 'message', {
                    get() {
                        return value;
                    }
                }).message;
            }
        };
    }
    exports.default = Callback;
});
//# sourceMappingURL=callback.js.map