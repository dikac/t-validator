(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./validatable/map"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const map_1 = require("./validatable/map");
    class Property {
        constructor(schema) {
            this.schema = schema;
        }
        validate(value) {
            let map = new Map();
            for (let property in value) {
                map.set(property, this.schema[property].validate(value[property]));
            }
            return new map_1.default(value, map);
            //
            // return {
            //     value : 1,
            //     message : 'a',
            //     valid : true,
            //
            // };
        }
    }
    exports.default = Property;
});
// class CC extends ValidatableType<string> {
//
//     protected getMessage(data: any, valid: boolean): string {
//         return "";
//     }
// }
//
// let schema = {
//   data : new Type<string>((data) => new CC(data, (value : any) : value is string =>  { return  typeof value ==="string"}) )
// };
//
// let property = new Property(schema);
//
// property.validate({data:'a'});
//# sourceMappingURL=property.js.map