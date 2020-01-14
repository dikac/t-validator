import Validatable from "@dikac/t-validatable/validatable";
import Immutable from "@dikac/t-value/immutable";
import MessageInterface from "@dikac/t-message/message";
export default class Property<Value extends {
    [Key in keyof Value]: any;
}, Msg extends {
    [Key in keyof Value]: any;
}> {
    private validatables;
    constructor(validatables: {
        [Key in keyof Value]: Validatable & Immutable<Value> & MessageInterface<Msg>;
    });
    get valid(): boolean;
    get message(): Msg;
    get value(): Value;
}
