import Validator from "./validator";
import Functions from "@dikac/t-function/function";
import Validatable from "@dikac/t-validatable/validatable";
import FunctionSingle from "@dikac/t-function/function-single";
import Message from "@dikac/t-message/message";

export default class Callback<
    Value,
    Result extends Validatable & Message
    > implements Validator<Value, Result>
{

    constructor(
        private functions : FunctionSingle<Value, Result>,
    ) {

    }

    validate(value: Value): Result {

        return this.functions(value);
    }
}
