import Function from "@dikac/t-function/function";
import Instance from "../instance";
/**
 * Throw exception if given value is not {@link ValidatableInterface} type
 */
export default function Valid<Assumption extends Argument, Argument extends Instance = Instance>(value: Argument, error?: Function<[Argument], Error>): asserts value is Assumption;
