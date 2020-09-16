import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import BooleanEqual from "@dikac/t-boolean/equal";
import Validatable from "@dikac/t-validatable/validatable";
import Return from "./simple";
import Callback from "./callback";
import ReadonlyMerge from "./readonly-merge";

export default function Equal<
    BaseTemplate = unknown,
    ValueType extends BaseTemplate = BaseTemplate,
    TypeType extends BaseTemplate = BaseTemplate,
    MessageType = unknown,
>(
    value : ValueType,
    type : TypeType,
    message : (result:Readonly<Value<[ValueType, TypeType]> & Validatable<boolean>>)=>MessageType,
) : Return<BaseTemplate, ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<MessageType>>> {

    const bs = new Callback([type, value], (values: [BaseTemplate, BaseTemplate])=>BooleanEqual(...values), message);

    return new ReadonlyMerge({value:value}, bs, bs) as Return<BaseTemplate, ValueType, TypeType, Readonly<Value<ValueType> & Validatable & Message<MessageType>>>;
}
