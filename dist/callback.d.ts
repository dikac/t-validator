import Validator from "./validator";
import Validatable from "@dikac/t-validatable/validatable";
import FunctionSingle from "@dikac/t-function/function-single";
export default class Callback<Value, Result extends Validatable> implements Validator<Value, Result> {
    private functions;
    constructor(functions: FunctionSingle<Value, Result>);
    validate(value: Value): Result;
}
