import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import Validatable from "@dikac/t-validatable/validatable";
import Return from "./simple";
import MemoizeGetter from "@dikac/t-object/value/value/memoize-getter";

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

    const base = {

        get value () : [ValueT, TypeT] {

            return [value, type];
        },

        get valid() : boolean {

            return value as BaseTemplate === type as BaseTemplate;
        },
    }

    return <Return<BaseTemplate, ValueT, TypeT, Readonly<Value<ValueT> & Validatable & Message<MessageT>>>> {

        get value () {

            return value;
        },

        get valid() {

            return base.valid;
        },

        get message() {

            return MemoizeGetter(this, 'message', message(base))
        }
    };
}
