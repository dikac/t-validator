import ValidatableInterface from "@dikac/t-validatable/validatable";
import Validatable from "../validatable";
import ThrowableValid from "../throwable/valid";

/**
 * Throw exception if given value is not {@link ValidatableInterface} type
 */

export default function Valid<
    Assumption extends Argument,
    Argument extends Validatable = Validatable,
>(
    value : Argument,
    error : (value:Argument)=>Error = ThrowableValid
) : asserts value is Assumption {

    if(!value.valid) {

       throw error(value);
    }
}
