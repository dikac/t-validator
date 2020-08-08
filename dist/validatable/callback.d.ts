import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Message from "@dikac/t-message/message";
import Validatable from "@dikac/t-validatable/validatable";
import Guard from "@dikac/t-function/boolean/guard";
import Return from "./simple";
/**
 * use {@param validation} to populate {@link Validatable} data by passing {@param value}
 * to {@param validation}
 *
 * {@param message} is used to generate message
 */
export default function Callback<ValueT = unknown, TypeT extends ValueT = ValueT, MessageT = unknown>(value: ValueT, validation: Guard<ValueT, TypeT>, message: Function<[Readonly<Value<ValueT> & Validatable<boolean>>], MessageT>): Return<ValueT, ValueT, TypeT, Readonly<Value<ValueT> & Validatable & Message<MessageT>>>;
export default function Callback<ValueT = unknown, TypeT extends ValueT = ValueT, MessageT = unknown>(value: TypeT, validation: Function<[ValueT], boolean>, message: Function<[Readonly<Value<ValueT> & Validatable<boolean>>], MessageT>): Return<ValueT, ValueT, TypeT, Readonly<Value<ValueT> & Validatable & Message<MessageT>>>;
