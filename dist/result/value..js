(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./result"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const result_1 = require("./result");
    class Type extends result_1.default {
        constructor(data, check) {
            super(data, check(data));
            this.check = check;
        }
    }
    exports.default = Type;
});
//# sourceMappingURL=value..js.map