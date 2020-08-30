import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import BooleanEqual from "@dikac/t-boolean/equal";
import Validatable from "@dikac/t-validatable/validatable";
import Return from "./simple";
import Callback from "./callback";
import ReadonlyMerge from "./readonly-merge";

export default function Equal<
    BaseTemplate = unknown,
    ValueT extends BaseTemplate = BaseTemplate,
    TypeT extends BaseTemplate = BaseTemplate,
    MessageT = unknown,
>(
    value : ValueT,
    type : TypeT,
    message : (result:Readonly<Value<[ValueT, TypeT]> & Validatable<boolean>>)=>MessageT,
) : Return<BaseTemplate, ValueT, TypeT, Readonly<Value<ValueT> & Validatable & Message<MessageT>>> {

    const bs = new Callback([type, value], (values: [BaseTemplate, BaseTemplate])=>BooleanEqual(...values), message);

    return new ReadonlyMerge({value:value}, bs, bs) as Return<BaseTemplate, ValueT, TypeT, Readonly<Value<ValueT> & Validatable & Message<MessageT>>>;
}
