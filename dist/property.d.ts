import Validator from "./validator";
import Validatable from "t-validatable/validatable";
import MessageInterface from "t-message/message";
import Immutable from "t-value/immutable";
export default class Property<Value extends {
    [key: string]: any;
}> implements Validator<Value, Validatable & MessageInterface<Map<string, string>> & Immutable<Value>> {
    private schema;
    constructor(schema: {
        [K in keyof Value]: Validator<Value[K], Validatable & Immutable<Value[K]> & MessageInterface<string>>;
    });
    validate(value: Value): Validatable & MessageInterface<Map<string, string>> & Immutable<Value>;
}
