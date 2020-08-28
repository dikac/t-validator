import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import Validatable from "@dikac/t-validatable/validatable";
import Return from "./simple";
export default function Equal<BaseTemplate = unknown, ValueT extends BaseTemplate = BaseTemplate, TypeT extends BaseTemplate = BaseTemplate, MessageT = unknown>(value: ValueT, type: TypeT, message: (result: Readonly<Value<[ValueT, TypeT]> & Validatable<boolean>>) => MessageT): Return<BaseTemplate, ValueT, TypeT, Readonly<Value<ValueT> & Validatable & Message<MessageT>>>;
