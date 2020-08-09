import ValueInfer from "@dikac/t-value/value/infer";
import ReadonlyWrapper from "./readonly-wrapper";
import Function from "@dikac/t-function/function";
import Validatable from "./validatable";
/**
 * @inheritDoc {@link ReadonlyWrapper}
 *
 * throw exception when {@link Validatable} is in valid (false) when
 * accessing value {@link Value}
 */
export default class Asserted<ValidatableT extends Validatable = Validatable> extends ReadonlyWrapper<ValidatableT> {
    error: Function<[ValidatableT], Error>;
    /**
     * @param subject
     * @param error
     */
    constructor(subject: ValidatableT, error?: Function<[ValidatableT], Error>);
    get value(): ValueInfer<ValidatableT>;
}
