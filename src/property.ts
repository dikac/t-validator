import Validator from "./validator";
import Validatable from "@dikac/t-validatable/validatable";
import MessageInterface from "@dikac/t-message/message";
import Immutable from "@dikac/t-value/immutable";
import PropertyValidatable from "./validatable/property";
import Map_ from "@dikac/t-validatable/message/map";


export type Validators<
    Value extends {[Key in keyof Value] : Value[Key]},
    Msg extends {[Key in keyof Value] :  Msg[Key]}
> = {
    [K in keyof Value] : Validator<Value[K], Validatable & Immutable<Value[K]> & MessageInterface<Msg[K]>>
}

export default class Property<
    Value extends  {[Key in keyof Value] : Value[Key]},
    Msg extends  {[Key in keyof Value] : Msg[Key]}
    > implements Validator<Value, Validatable & MessageInterface<Msg> & Immutable<Value>>
{

    constructor(private schema : Validators<Value, Msg>) {}

    validate(value: Value): Validatable & MessageInterface<Msg> &  Immutable<Value> {

        //let map : {[Key in keyof Value] : Validatable & Immutable<Value[Key]> & MessageInterface<Msg>} = {};
        let map : {[key : string] : Validatable & Immutable<Value> & MessageInterface<Msg>} = {};

        for(let property in value) {

            map[property] = this.schema[property].validate(value[property])

        }


        return <Validatable & MessageInterface<Msg> &  Immutable<Value>> new PropertyValidatable<Value, Msg>(
            <{[Key in keyof Value] : Validatable & Immutable<Value> & MessageInterface<Msg>}> map
        );
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