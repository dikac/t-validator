import Simple from "../simple";
import TypeFunction from "@dikac/t-function/boolean/function";

export default function Validator<
    ValidatorT extends Simple
>(
    value : object
) : value is ValidatorT {

    if(!TypeFunction((<Simple>value).validate)) {

        return false;
    }

    return true;

}
