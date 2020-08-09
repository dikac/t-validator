import Value from "@dikac/t-value/value";
import ValueInfer from "@dikac/t-value/value/infer";
import ReadonlyWrapper from "./readonly-wrapper";
import Function from "@dikac/t-function/function";
import Validatable from "@dikac/t-validatable/validatable";
import ThrowableValid from "./throwable/valid";
import Instance from "./instance";

/**
 * @inheritDoc {@link ReadonlyWrapper}
 *
 * throw exception when {@link Validatable} is in valid (false) when
 * accessing value {@link Value}
 */
export default class Asserted<
    InstanceT extends Instance = Instance
> extends ReadonlyWrapper<
    InstanceT
> {

    /**
     * @param subject
     * @param error
     */
    constructor(
        subject : InstanceT,
        public error : Function<[InstanceT], Error> = ThrowableValid
    ) {

        super(subject);
    }

    get value() : ValueInfer<InstanceT> {

        if(!this.valid) {

            throw this.error(this.subject);
        }

        return <ValueInfer<InstanceT>> this.subject.value;
    }
}
