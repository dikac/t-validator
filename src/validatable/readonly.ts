export default function Readonly<
    ValueT,
    MessageT,
    ValidT extends boolean
>(
    value : ValueT,
    valid : ValidT,
    message : MessageT
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
