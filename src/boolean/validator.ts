import Validator from "../validator";
import TypeFunction from "@dikac/t-function/boolean/function";

export default function Validator<
    Assumption extends Validator
>(
    value : object
) : value is Assumption {


    if(!TypeFunction((<Validator>value).validate)) {

        return false;
    }

    return true;

}
