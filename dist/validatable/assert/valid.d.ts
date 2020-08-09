import Function from "@dikac/t-function/function";
import Validatable from "../validatable";
/**
 * Throw exception if given value is not {@link ValidatableInterface} type
 */
export default function Valid<Assumption extends Argument, Argument extends Validatable = Validatable>(value: Argument, error?: Function<[Argument], Error>): asserts value is Assumption;
