import ValidatorSimple from "../dist/simple";
import Validatable from "../dist/validatable/validatable";
import ReturnSimple from "../dist/validatable/simple";

export default class TestReadonly implements ValidatorSimple<unknown, string, Readonly<Validatable<unknown, string>>> {

    validate<Argument extends unknown>(value: Argument): ReturnSimple<unknown, Argument, string, Readonly<Validatable<unknown, string>>>
    validate<Argument extends string>(value: Argument): Readonly<Validatable<Argument, string, true>>
    validate<Argument extends unknown>(value: Argument): ReturnSimple<unknown, Argument, string, Readonly<Validatable<unknown, string>>> | Readonly<Validatable<Argument, string, true>>
    {

        return <ReturnSimple<unknown, Argument, string, Validatable<unknown, string>>> {
            valid : typeof value === "string",
            value : value,
            message : 'message'
        }
    }

}
