import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import FunctionGuard from "@dikac/t-function/boolean/guard";
import Message from "@dikac/t-message/message";
import Callback from "./callback";
import Validatable from "@dikac/t-validatable/validatable";
import Return from "./simple";
import Validation from "../boolean/validation/validation";

/**
 * {@link Callback} factory by using {@param object}
 *
 * {@link validation} is used as callback
 * {@link Value} is used as value
 * {@link Message} is used as message
 */

export default function CallbackObject<
    Val = unknown,
    Type extends Val = Val,
    MessageT = unknown,
    >(
    object : Value<Val> & Validation<FunctionGuard<unknown, Type>> & Message<Function<[Value<Val> & Validatable], MessageT>>,
)  : Return<Val, Val, Type, Readonly<Value<Val> & Validatable & Message<MessageT>>>;

export default function CallbackObject<
    Val = unknown,
    MessageT = unknown,
    >(
    object : Value<Val> & Validation<Function<unknown[], boolean>> & Message<Function<[Value<Val> & Validatable], MessageT>>,
)  : Readonly<Value<Val> & Validatable & Message<MessageT>> ;

export default function CallbackObject<
    Val = unknown,
    MessageT = unknown,
>(
    object : Value<Val> & Validation<Function<unknown[], boolean>> & Message<Function<[Value<Val> & Validatable], MessageT>>,
)  : Readonly<Value<Val> & Validatable & Message<MessageT>> {

    return <Readonly<Value<Val> & Validatable & Message<MessageT>>> Callback(object.value, object.validation, object.message);
}

