import InferMessage from "@dikac/t-message/message/infer";
import InferValue from "@dikac/t-value/value/infer";
import Validatable from "./validatable";
import InferValidatable from "@dikac/t-validatable/boolean/infer";
/**
 * read only wrapper for {@link Message}, {@link Value} and {@link ValidatableInterface}
 */
export default class ReadonlyWrapper<Subject extends Validatable> implements Readonly<Validatable<InferValue<Subject>, InferMessage<Subject>, InferValidatable<Subject>>> {
    protected subject: Subject;
    constructor(subject: Subject);
    get valid(): InferValidatable<Subject>;
    get message(): InferMessage<Subject>;
    get value(): InferValue<Subject>;
}
