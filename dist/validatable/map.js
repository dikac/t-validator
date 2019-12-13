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
    class Map_ {
        constructor(data, results) {
            this.data = data;
            this.results = results;
            this.valids = new Map();
            this.invalids = new Map();
            for (let [key, result] of results) {
                if (result.valid) {
                    this.valids.set(key, result);
                }
                else {
                    this.invalids.set(key, result);
                }
            }
        }
        get valid() {
            return this.invalids.size === 0;
        }
        get message() {
            let data = this.valid ? this.valids : this.invalids;
            let message = new Map();
            for (let [key, validator] of data) {
                message.set(key, validator.message);
            }
            return message;
        }
        get value() {
            if (this.valid) {
                return this.data;
            }
            else {
                throw new Error([...this.message.values()].join(', '));
            }
        }
    }
    exports.default = Map_;
});
//# sourceMappingURL=map.js.map