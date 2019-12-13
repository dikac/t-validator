import Validator from "./validator";
import Validatable from "t-validatable/validatable";
import MessageInterface from "t-message/message";
import Immutable from "t-value/immutable";
import Type from "./type";
import ValidatableType from "./validatable/type";
import Map_ from "./validatable/map";

export default class Property<
    Value extends  {[key:string] : any},
    > implements Validator<Value, Validatable &  MessageInterface<Map<string,string>> & Immutable<Value>>
{

    constructor(
        private schema : {[K in keyof Value] : Validator<Value[K], Validatable & Immutable<Value[K]> & MessageInterface<string>>}) {

    }

    validate(value: Value): Validatable &  MessageInterface<Map<string,string>> &  Immutable<Value> {

        let map = new Map<string, Validatable & MessageInterface<string>>();

        for(let property in value) {

            map.set(
                property,
                this.schema[property].validate(value[property])
            );
        }

        return new Map_(value, map);
        //
        // return {
        //     value : 1,
        //     message : 'a',
        //     valid : true,
        //
        // };

    }
}

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