var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/value/value/set-getter"], factory);
    }
})(function (require, exports) {
    "use strict";
    var _message;
    Object.defineProperty(exports, "__esModule", { value: true });
    const set_getter_1 = require("@dikac/t-object/value/value/set-getter");
    class Callback {
        constructor(value, validation, message) {
            this.value = value;
            this.validation = validation;
            _message.set(this, void 0);
            __classPrivateFieldSet(this, _message, message);
        }
        get valid() {
            return set_getter_1.default(this, 'valid', this.validation(this.value));
        }
        get message() {
            return set_getter_1.default(this, 'message', __classPrivateFieldGet(this, _message).call(this, this));
        }
    }
    exports.default = Callback;
    _message = new WeakMap();
});
//# sourceMappingURL=callback.js.map