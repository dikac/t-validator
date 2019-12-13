import Validatable from "t-validatable/validatable";
import Message from "t-message/message";
import Immutable from "t-value/immutable";
export default class Map_<Type> implements Validatable, Message<Map<string, string>>, Immutable<Type> {
    private data;
    private results;
    readonly valids: Map<string, Validatable & Message<string>>;
    readonly invalids: Map<string, Validatable & Message<string>>;
    constructor(data: Type, results: Map<string, Validatable & Message<string>>);
    get valid(): boolean;
    get message(): Map<string, string>;
    get value(): Type;
}
