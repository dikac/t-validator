import Validator from "./validator";
import Validatable from "@dikac/t-validatable/validatable";
import Immutable from "@dikac/t-value/immutable";
import MessageInterface from "@dikac/t-message/message";

export default class Value<
    Value,
    Result extends Validatable &  MessageInterface &  Immutable<Value> = Validatable &  MessageInterface &  Immutable<Value>
    > implements Validator<Value, Result>
{

    constructor(
        private result : (value : any) => Result,
    ) {

    }

    validate(value: Value): Result {

        return this.result(value);
    }
}