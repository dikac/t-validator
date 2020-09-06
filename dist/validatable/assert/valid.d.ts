import Validatable from "../validatable";
/**
 * Throw exception if given value is not {@link ValidatableInterface} type
 */
export default function Valid<Argument extends Validatable = Validatable>(value: Argument, error?: (value: Argument) => Error): asserts value is Argument;
