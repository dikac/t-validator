import Validator from "./validator";
import Validatable from "t-validatable/validatable";
import MessageInterface from "t-message/message";
import Immutable from "t-value/immutable";
declare type Result<Value> = Validatable & MessageInterface<string[]> & Immutable<Value>;
export default class Chain<Value> implements Validator<Value, Result<Value>> {
    validators: Validator<Value, Validatable & MessageInterface & Immutable<Value>>[];
    constructor(validators: Validator<Value, Validatable & MessageInterface & Immutable<Value>>[]);
    validate(value: Value): Result<Value>;
}
export {};
