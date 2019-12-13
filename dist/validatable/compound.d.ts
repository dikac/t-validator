import Validatable from "t-validatable/validatable";
import Message from "t-message/message";
import Immutable from "t-value/immutable";
export default class Compound<Type> implements Validatable, Message<string[]>, Immutable<Type> {
    private data;
    private results;
    readonly valids: (Validatable & Message<string>)[];
    readonly invalids: (Validatable & Message<string>)[];
    constructor(data: Type, results: (Validatable & Message<string>)[]);
    get valid(): boolean;
    get message(): string[];
    get value(): Type;
}
