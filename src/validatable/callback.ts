import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Return from "./simple";
import Message from "@dikac/t-message/message";
import Validation from "../boolean/validation/validation";
import MemoizeGetter from "@dikac/t-object/value/value/memoize-getter";

export default class Callback<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
> implements
    Readonly<Value<ValueType>>,
    Readonly<Validatable>,
    Readonly<Message<MessageType>>,
    Readonly<Validation<(value:ValueType)=>boolean>>
{

    constructor(
        readonly value : Type,
        readonly validation : (value:ValueType)=>boolean,
        private _message : (result:Readonly<Value<ValueType> & Validatable<boolean>>)=> MessageType,
    ) {
    }

    get valid() {

        return MemoizeGetter(this, 'valid', this.validation(this.value));
    }

    get message() {

        return MemoizeGetter(this, 'message', this._message(this));
    }
}
