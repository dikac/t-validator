export default function Readonly<ValueType, MessageType, ValidType extends boolean>(value: ValueType, valid: ValidType, message: MessageType): {
    readonly value: ValueType;
    readonly valid: ValidType;
    readonly message: MessageType;
};
