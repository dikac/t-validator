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
var _message;
import MemoizeGetter from "@dikac/t-object/value/value/set-getter";
export default class Callback {
    constructor(value, validation, message) {
        this.value = value;
        this.validation = validation;
        _message.set(this, void 0);
        __classPrivateFieldSet(this, _message, message);
    }
    get valid() {
        return MemoizeGetter(this, 'valid', this.validation(this.value));
    }
    get message() {
        return MemoizeGetter(this, 'message', __classPrivateFieldGet(this, _message).call(this, this));
    }
}
_message = new WeakMap();
//# sourceMappingURL=callback.js.map