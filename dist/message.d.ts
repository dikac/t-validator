import Validator from "./validator";
import Validatable from "t-validatable/validatable";
export default class Message<Value, Result extends Validatable = Validatable> implements Validator<Value, Result> {
    validator: (value: Value) => boolean;
    result: (value: Value, boolean: boolean) => Result;
    constructor(validator: (value: Value) => boolean, result: (value: Value, boolean: boolean) => Result);
    validate(value: Value): Result;
}
