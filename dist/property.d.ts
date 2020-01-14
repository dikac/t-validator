import Validator from "./validator";
import Validatable from "@dikac/t-validatable/validatable";
import MessageInterface from "@dikac/t-message/message";
import Immutable from "@dikac/t-value/immutable";
export declare type Validators<Value extends {
    [Key in keyof Value]: Value[Key];
}, Msg extends {
    [Key in keyof Value]: Msg[Key];
}> = {
    [K in keyof Value]: Validator<Value[K], Validatable & Immutable<Value[K]> & MessageInterface<Msg[K]>>;
};
export default class Property<Value extends {
    [Key in keyof Value]: Value[Key];
}, Msg extends {
    [Key in keyof Value]: Msg[Key];
}> implements Validator<Value, Validatable & MessageInterface<Msg> & Immutable<Value>> {
    private schema;
    constructor(schema: Validators<Value, Msg>);
    validate(value: Value): Validatable & MessageInterface<Msg> & Immutable<Value>;
}
