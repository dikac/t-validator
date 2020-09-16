import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Validation from "../boolean/validation/validation";
import MemoizeGetter from "@dikac/t-object/value/value/set-getter";

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

    #message : (result:Readonly<Value<ValueType> & Validatable<boolean>>)=> MessageType;

    constructor(
        readonly value : Type,
        readonly validation : (value:ValueType)=>boolean,
        message : (result:Readonly<Value<ValueType> & Validatable<boolean>>)=> MessageType,
    ) {
        this.#message = message;
    }

    get valid() {

        return MemoizeGetter(this, 'valid', this.validation(this.value));
    }

    get message() {

        return MemoizeGetter(this, 'message', this.#message(this));
    }
}
