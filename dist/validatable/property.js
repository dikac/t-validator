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
    class Property {
        constructor(validatables) {
            this.validatables = validatables;
        }
        get valid() {
            for (let validator in this.validatables) {
                if (!this.validatables[validator].valid) {
                    return false;
                }
            }
            return true;
        }
        get message() {
            let object = {};
            for (let validator in this.validatables) {
                object[validator] = this.validatables[validator].message;
            }
            return object;
        }
        get value() {
            let object = {};
            for (let validator in this.validatables) {
                object[validator] = this.validatables[validator].value;
            }
            return object;
        }
    }
    exports.default = Property;
});
//# sourceMappingURL=property.js.map