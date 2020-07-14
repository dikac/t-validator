import Validator from "../validator";
import TypeObject from "@dikac/t-object/boolean/object";
import TypeFunction from "@dikac/t-function/boolean/function";

export default function Validator<
    Assumption extends Validator<any>
>(
    value : any
) : value is Assumption {

    if(!TypeObject<Assumption>(value)) {

        return false;
    }

    if(!TypeFunction(value.validate)) {

        return false;
    }

    return true;

}
