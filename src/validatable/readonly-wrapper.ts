import ValidatableInterface from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import InferMessage from "@dikac/t-message/message/infer";
import ValueWrapper from "@dikac/t-validatable/readonly-wrapper";
import Value from "@dikac/t-value/value";
import InferValue from "@dikac/t-value/value/infer";
import Validatable from "./validatable";
import InferValidatable from "@dikac/t-validatable/boolean/infer";

/**
 * read only wrapper for {@link Message}, {@link Value} and {@link ValidatableInterface}
 */

export default class ReadonlyWrapper<
    Subject extends Validatable
> extends
    ValueWrapper<Subject>
implements
    Readonly<Validatable<
        InferValue<Subject>,
        InferMessage<Subject>,
        InferValidatable<Subject>
    >> {

    get message() : InferMessage<Subject> {

        return <InferMessage<Subject>> this.subject.message;
    }

    get value() : InferValue<Subject> {

        return <InferValue<Subject>> this.subject.value;
    }
}
