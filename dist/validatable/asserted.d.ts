import ValueInfer from "@dikac/t-value/value/infer";
import ReadonlyWrapper from "./readonly-wrapper";
import Function from "@dikac/t-function/function";
import Instance from "./instance";
/**
 * @inheritDoc {@link ReadonlyWrapper}
 *
 * throw exception when {@link Validatable} is in valid (false) when
 * accessing value {@link Value}
 */
export default class Asserted<InstanceT extends Instance = Instance> extends ReadonlyWrapper<InstanceT> {
    error: Function<[InstanceT], Error>;
    /**
     * @param subject
     * @param error
     */
    constructor(subject: InstanceT, error?: Function<[InstanceT], Error>);
    get value(): ValueInfer<InstanceT>;
}
