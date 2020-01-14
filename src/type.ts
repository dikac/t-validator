import Validator from "./validator";
import Validatable from "@dikac/t-validatable/validatable";
import Immutable from "@dikac/t-value/immutable";
import MessageInterface from "@dikac/t-message/message";

export default class Type<
    Value,
    Result extends Validatable &  MessageInterface &  Immutable<Value> = Validatable &  MessageInterface &  Immutable<Value>
    > implements Validator<any, Result>
{

    constructor(
        private result : (value : any) => Result,
    ) {

    }

    validate(value: any): Result {

        return this.result(value);
    }
}