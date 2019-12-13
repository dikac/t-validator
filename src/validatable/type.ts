import Result from "./result";

export default abstract class Type<Type> extends Result<Type> {

    constructor(
        data : any,
        private check : (value : any) => value is Type
    ) {

        super(data, check(data));
    }
}