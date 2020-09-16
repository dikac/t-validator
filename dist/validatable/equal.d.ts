import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import Validatable from "@dikac/t-validatable/validatable";
import Return from "./simple";
export default function Equal<BaseTemplate = unknown, ValueType extends BaseTemplate = BaseTemplate, TypeType extends BaseTemplate = BaseTemplate, MessageType = unknown>(value: ValueType, type: TypeType, message: (result: Readonly<Value<[ValueType, TypeType]> & Validatable<boolean>>) => MessageType): Return<BaseTemplate, ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<MessageType>>>;
