import Value from "@dikac/t-value/value";
import ValueInfer from "@dikac/t-value/value/infer";
import ReadonlyWrapper from "./readonly-wrapper";
import Function from "@dikac/t-function/function";
import ThrowableValid from "./throwable/valid";
import Validatable from "./validatable";

/**
 * @inheritDoc {@link ReadonlyWrapper}
 *
 * throw exception when {@link Validatable} is in valid (false) when
 * accessing value {@link Value}
 */
export default class Asserted<
    ValidatableT extends Validatable = Validatable
> extends ReadonlyWrapper<
    ValidatableT
> {
    /**
     * @param subject
     * @param error
     */
    constructor(
        subject : ValidatableT,
        public error : Function<[ValidatableT], Error> = ThrowableValid
    ) {

        super(subject);
    }

    get value() : ValueInfer<ValidatableT> {

        if(!this.valid) {

            throw this.error(this.subject);
        }

        return <ValueInfer<ValidatableT>> this.subject.value;
    }
}
