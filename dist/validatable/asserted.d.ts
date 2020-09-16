import ValueInfer from "@dikac/t-value/value/infer";
import ReadonlyWrapper from "./readonly-wrapper";
import Validatable from "./validatable";
/**
 * @inheritDoc {@link ReadonlyWrapper}
 *
 * throw exception when {@link Validatable} is in valid (false) when
 * accessing value {@link Value}
 */
export default class Asserted<ValidatableType extends Validatable = Validatable> extends ReadonlyWrapper<ValidatableType> {
    error: (result: ValidatableType) => Error;
    /**
     * @param subject
     * @param error
     */
    constructor(subject: ValidatableType, error?: (result: ValidatableType) => Error);
    get value(): ValueInfer<ValidatableType>;
}
