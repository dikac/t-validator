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
    class Array_ {
        constructor(data, results) {
            this.data = data;
            this.results = results;
            this.valids = [];
            this.invalids = [];
            for (let result of results) {
                if (result.valid) {
                    this.valids.push(result);
                }
                else {
                    this.invalids.push(result);
                }
            }
        }
        get valid() {
            return this.invalids.length === 0;
        }
        get message() {
            let data = this.valid ? this.valids : this.invalids;
            return data.map(validator => validator.message);
        }
        get value() {
            if (this.valid) {
                return this.data;
            }
            else {
                throw new Error(this.message.join(', '));
            }
        }
    }
    exports.default = Array_;
});
//# sourceMappingURL=array.js.map