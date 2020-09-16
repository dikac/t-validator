import ValidatableInterface from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import InferMessage from "@dikac/t-message/message/infer";
import Value from "@dikac/t-value/value";
import InferValue from "@dikac/t-value/value/infer";
import Validatable from "./validatable";
import InferValidatable from "@dikac/t-validatable/boolean/infer";

/**
 * read only wrapper for {@link Message}, {@link Value} and {@link ValidatableInterface}
 */

export default class ReadonlyWrapper<
    Subject extends Validatable
> implements
    Readonly<Validatable<
        InferValue<Subject>,
        InferMessage<Subject>,
        InferValidatable<Subject>
    >> {

    constructor(protected subject : Subject) {}

    get valid() : InferValidatable<Subject> {

        return <InferValidatable<Subject>> this.subject.valid;
    }

    get message() : InferMessage<Subject> {

        return <InferMessage<Subject>> this.subject.message;
    }

    get value() : InferValue<Subject> {

        return <InferValue<Subject>> this.subject.value;
    }
}
