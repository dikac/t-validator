import Validator from "./validator";
import Validatable from "t-validatable/validatable";
import Immutable from "t-value/immutable";
import MessageInterface from "t-message/message";

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