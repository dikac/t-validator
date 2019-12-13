import Result from "./result";
export default abstract class Type<Type> extends Result<Type> {
    private check;
    constructor(data: any, check: (value: any) => value is Type);
}
