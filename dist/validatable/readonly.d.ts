export default function Readonly<ValueT, MessageT, ValidT extends boolean>(value: ValueT, valid: ValidT, message: MessageT): {
    readonly value: ValueT;
    readonly valid: ValidT;
    readonly message: MessageT;
};
