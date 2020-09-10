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
    /**
     * adapt callback to {@see Validator}
     */
    class Callback {
        /**
         * @param callback
         */
        constructor(callback) {
            this.callback = callback;
        }
        validate(value) {
            return this.callback(value);
        }
    }
    exports.default = Callback;
});
//# sourceMappingURL=callback.js.map