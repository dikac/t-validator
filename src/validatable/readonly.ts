export default function Readonly<
    ValueType,
    MessageType,
    ValidType extends boolean
>(
    value : ValueType,
    valid : ValidType,
    message : MessageType
) {

    return {
        get value () {
            return value;
        },
        get valid () {
            return valid;
        },
        get message () {
            return message;
        }
    }
}
