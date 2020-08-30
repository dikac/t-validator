import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import Validatable from "@dikac/t-validatable/validatable";
import Return from "./simple";
import Validation from "../boolean/validation/validation";
/**
 * {@link CallbackFunction} factory by using {@param object}
 *
 * {@link validation} is used as callback
 * {@link Value} is used as value
 * {@link Message} is used as message
 */
export default function CallbackFunctionObject<Val = unknown, Type extends Val = Val, MessageT = unknown>(object: Value<Val> & Validation<(value: unknown) => value is Type> & Message<(result: Value<Val> & Validatable) => MessageT>): Return<Val, Val, Type, Readonly<Value<Val> & Validatable & Message<MessageT>>>;
export default function CallbackFunctionObject<Val = unknown, MessageT = unknown>(object: Value<Val> & Validation<(value: unknown) => boolean> & Message<(result: Value<Val> & Validatable) => MessageT>): Readonly<Value<Val> & Validatable & Message<MessageT>>;
