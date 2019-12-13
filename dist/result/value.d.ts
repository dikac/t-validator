import Result from "./result";
export default abstract class Type<Type> extends Result<Type> {
    private check;
    constructor(data: Type, check: (value: Type) => boolean);
}
