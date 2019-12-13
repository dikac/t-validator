import Validator from "./validator";
import Validatable from "t-validatable/validatable";

export default class Message<Value, Result extends Validatable = Validatable> implements Validator<Value, Result> {

    constructor(
        public validator : (value : Value) => boolean,
        public result : (value : Value, boolean : boolean) => Result,
    ) {

    }

    validate(value: Value): Result {

        return this.result(value, this.validator(value));
    }
}