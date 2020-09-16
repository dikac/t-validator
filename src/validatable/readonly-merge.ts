import Message from "@dikac/t-message/message";
import InferMessage from "@dikac/t-message/message/infer";
import Value from "@dikac/t-value/value";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import InferValidatable from "@dikac/t-validatable/boolean/infer";
import InferValue from "@dikac/t-value/value/infer";
import Validatable from "./validatable";

/**
 * merge {@link Value}, {@link Message} and {@link ValidatableInterface}
 */
export default class ReadonlyMerge<
    ValueType extends Value,
    MessageType extends Message,
    ValidatableType extends ValidatableInterface,
>
implements
    Readonly<Validatable<
        InferValue<ValueType>,
        InferMessage<MessageType>,
        InferValidatable<ValidatableType>
    >>
{
    constructor(
         readonly valueContainer: ValueType,
         readonly messageContainer: MessageType,
         readonly validatableContainer: ValidatableType,
    ) {
    }

    get valid() : InferValidatable<ValidatableType> {

        return <InferValidatable<ValidatableType>>this.validatableContainer.valid;
    }

    get value() : InferValue<ValueType> {

        return <InferValue<ValueType>> this.valueContainer.value;
    }

    get message(): InferMessage<MessageType> {

        return <InferMessage<MessageType>> this.messageContainer.message;
    }
}
