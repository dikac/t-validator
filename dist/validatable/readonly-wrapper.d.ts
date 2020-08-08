import InferMessage from "@dikac/t-message/message/infer";
import ValueWrapper from "@dikac/t-validatable/readonly-wrapper";
import InferValue from "@dikac/t-value/value/infer";
import Instance from "./instance";
import InferValidatable from "@dikac/t-validatable/boolean/infer";
/**
 * read only wrapper for {@link Message}, {@link Value} and {@link ValidatableInterface}
 */
export default class ReadonlyWrapper<Subject extends Instance> extends ValueWrapper<Subject> implements Readonly<Instance<InferValue<Subject>, InferMessage<Subject>, InferValidatable<Subject>>> {
    get message(): InferMessage<Subject>;
    get value(): InferValue<Subject>;
}
