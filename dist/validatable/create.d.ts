import Validatable from "./validatable";
export default function Create<ValueT, Valid extends boolean, MessageT>(value: ValueT, valid: Valid, message: MessageT): Validatable<ValueT, MessageT, Valid>;
