import Instance from "./instance";

export default function Create<
    ValueT,
    Valid extends boolean,
    MessageT
>(
    value : ValueT,
    valid : Valid,
    message : MessageT
) : Instance<ValueT, MessageT, Valid> {

    return {
        message : message,
        valid : valid,
        value : value
    };
}
