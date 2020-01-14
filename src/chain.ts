import Validator from "./validator";
import Validatable from "@dikac/t-validatable/validatable";
import Array_ from "@dikac/t-validatable/message/array";
import MessageInterface from "@dikac/t-message/message";
import Immutable from "@dikac/t-value/immutable";

type Result<Value> = Validatable &  MessageInterface<string[]> & Immutable<Value>;

export default class Chain<Value> implements Validator<Value, Result<Value>>{

    constructor(
        public validators : Validator<Value, Validatable &  MessageInterface &  Immutable<Value>>[]
    ) {

    }

    validate(value: Value): Result<Value>  {

        let temps : (Validatable &  MessageInterface &  Immutable<Value>)[]= [];

        for (let validator of this.validators) {

            temps.push(validator.validate(value));
        }

        return new Array_(value, temps);

    }
}