import Validator from "./validator";
import Functions from "@dikac/t-function/function";
import Validatable from "@dikac/t-validatable/validatable";
export default class Callback<Value, Result extends Validatable> implements Validator<Value, Result> {
    private functions;
    constructor(functions: Functions<[Value], Result>);
    validate(value: Value): Result;
}
