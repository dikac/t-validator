import Validator from "../validator";
import TypeFunction from "@dikac/t-function/boolean/function";

export default function Validator<
    ValidatorT extends Validator
>(
    value : object
) : value is ValidatorT {

    if(!TypeFunction((<Validator>value).validate)) {

        return false;
    }

    return true;

}
