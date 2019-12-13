import Result from "./result";

export default abstract class Type<Type> extends Result<Type> {

    constructor(
        data : Type,
        private check : (value : Type) => boolean
    ) {

        super(data, check(data));
    }

}