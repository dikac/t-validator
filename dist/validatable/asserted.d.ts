import Value from "@dikac/t-value/value";
import ValueInfer from "@dikac/t-value/value/infer";
import ReadonlyWrapper from "./readonly-wrapper";
import Function from "@dikac/t-function/function";
import Message from "@dikac/t-message/message";
import Validatable from "@dikac/t-validatable/validatable";
/**
 * @inheritDoc {@link ReadonlyWrapper}
 *
 * throw exception when {@link Validatable} is in valid (false) when
 * accessing value {@link Value}
 */
export default class Asserted<Instance extends Validatable & Value & Message = Validatable & Value & Message> extends ReadonlyWrapper<Instance> {
    error: Function<[Instance], Error>;
    /**
     * @param subject
     * @param error
     */
    constructor(subject: Instance, error?: Function<[Instance], Error>);
    get value(): ValueInfer<Instance>;
}
