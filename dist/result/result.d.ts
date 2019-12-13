import Validatable from "t-validatable/validatable";
import Message from "t-message/message";
import Immutable from "t-value/immutable";
export default abstract class Result<Type> implements Validatable, Message, Immutable<Type> {
    readonly data: Type;
    readonly valid: boolean;
    constructor(data: Type, valid?: boolean);
    get message(): string;
    protected abstract getMessage(data: any, valid: boolean): string;
    get value(): Type;
}
