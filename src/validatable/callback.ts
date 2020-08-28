import Value from "@dikac/t-value/value";
import Message from "@dikac/t-message/message";
import Validatable from "@dikac/t-validatable/validatable";
import Return from "./simple";

/**
 * use {@param validation} to populate {@link Validatable} data by passing {@param value}
 * to {@param validation}
 *
 * {@param message} is used to generate message
 */
export default function Callback<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
>(
    value : ValueType,
    validation : (value:ValueType)=>value is Type,
    message : (result:Readonly<Value<ValueType> & Validatable<boolean>>)=> MessageType,
) : Return<ValueType, ValueType, Type, Readonly<Value<ValueType> & Validatable & Message<MessageType>>>

export default function Callback<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
>(
    value : Type,
    validation : (value:ValueType)=>boolean,
    message : (result:Readonly<Value<ValueType> & Validatable<boolean>>)=> MessageType,
) : Return<ValueType, ValueType, Type, Readonly<Value<ValueType> & Validatable & Message<MessageType>>>

export default function Callback<
    ValueType = unknown,
    Type extends ValueType = ValueType,
    MessageType = unknown,
>(
    value : ValueType,
    validation : (value:ValueType)=>boolean,
    message : (result:Readonly<Value<ValueType> & Validatable<boolean>>)=> MessageType,
) :  Readonly<Value<ValueType> & Validatable<boolean> & Message<MessageType>>
{

    return  {

        get value () {

            return value;
        },

        get valid() {

            let value = validation(this.value);

            return Object.defineProperty(this, 'valid', {
                get() {
                    return value;
                }
            }).valid;
        },

        get message() {

            let value = message(this);

            return Object.defineProperty(this, 'message', {
                get() {
                    return value;
                }
            }).message;
        }
    };
}
