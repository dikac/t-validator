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
     * merge {@link Value}, {@link Message} and {@link ValidatableInterface}
     */
    class ReadonlyMerge {
        constructor(valueContainer, messageContainer, validatableContainer) {
            this.valueContainer = valueContainer;
            this.messageContainer = messageContainer;
            this.validatableContainer = validatableContainer;
        }
        get valid() {
            return this.validatableContainer.valid;
        }
        get value() {
            return this.valueContainer.value;
        }
        get message() {
            return this.messageContainer.message;
        }
    }
    exports.default = ReadonlyMerge;
});
//# sourceMappingURL=readonly-merge.js.map