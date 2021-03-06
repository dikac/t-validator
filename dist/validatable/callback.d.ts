import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Validation from "../boolean/validation/validation";
export default class Callback<ValueType = unknown, Type extends ValueType = ValueType, MessageType = unknown> implements Readonly<Value<ValueType>>, Readonly<Validatable>, Readonly<Message<MessageType>>, Readonly<Validation<(value: ValueType) => boolean>> {
    #private;
    readonly value: Type;
    readonly validation: (value: ValueType) => boolean;
    constructor(value: Type, validation: (value: ValueType) => boolean, message: (result: Readonly<Value<ValueType> & Validatable<boolean>>) => MessageType);
    get valid(): boolean;
    get message(): MessageType;
}
