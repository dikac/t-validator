import ValueInfer from "@dikac/t-value/value/infer";
import ReadonlyWrapper from "./readonly-wrapper";
import Validatable from "./validatable";
/**
 * @inheritDoc {@link ReadonlyWrapper}
 *
 * throw exception when {@link Validatable} is in valid (false) when
 * accessing value {@link Value}
 */
export default class Asserted<ValidatableT extends Validatable = Validatable> extends ReadonlyWrapper<ValidatableT> {
    error: (result: ValidatableT) => Error;
    /**
     * @param subject
     * @param error
     */
    constructor(subject: ValidatableT, error?: (result: ValidatableT) => Error);
    get value(): ValueInfer<ValidatableT>;
}
