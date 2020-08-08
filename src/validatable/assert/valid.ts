import ValidatableInterface from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import Instance from "../instance";
import ThrowableValid from "../throwable/valid";

/**
 * Throw exception if given value is not {@link ValidatableInterface} type
 */

export default function Valid<
    Assumption extends Argument,
    Argument extends Instance = Instance,
>(
    value : Argument,
    error : Function<[Argument], Error> = ThrowableValid
) : asserts value is Assumption {

    if(!value.valid) {

       throw error(value);
    }
}
