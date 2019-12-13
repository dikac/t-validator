import Validator from "./validator";
import Validatable from "t-validatable/validatable";
import Immutable from "t-value/immutable";
import MessageInterface from "t-message/message";

export default class Type<
    Subject,
    Value,
    Result extends Validatable &  MessageInterface &  Immutable<Value> = Validatable &  MessageInterface &  Immutable<Value>
    > implements Validator<Subject, Result>
{

    constructor(
        private result : (value : any) => Result,
    ) {

    }

    validate(value: Subject): Result {

        return this.result(value);
    }
}