import Simple from "../simple";
import TypeFunction from "@dikac/t-function/boolean/function";

export default function Validator<
    ValidatorType extends Simple
>(
    value : object
) : value is ValidatorType {

    if(!TypeFunction((<Simple>value).validate)) {

        return false;
    }

    return true;

}
