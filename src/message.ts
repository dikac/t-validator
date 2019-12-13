import Validator from "./validator";
import Validatable from "t-validatable/validatable";
import Immutable from "t-value/immutable";
import MessageInterface from "t-message/message";

export default class Message<
    Value,
    Result extends Validatable &  MessageInterface &  Immutable<Value> = Validatable &  MessageInterface &  Immutable<Value>
    > implements Validator<Value, Result>
{

    constructor(
        public result : (value : Value) => Result,
    ) {

    }

    validate(value: Value): Result {

        return this.result(value);
    }
}