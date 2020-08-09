import ValidatorSimple from "../dist/simple";
import Validatable from "../dist/validatable/validatable";
import ReturnSimple from "../dist/validatable/simple";

export default class TestObject implements ValidatorSimple<unknown, object, Validatable<unknown, string>> {

    validate<Argument extends object>(value: Argument): Validatable<Argument, string, true>
    validate<Argument extends unknown>(value: Argument): ReturnSimple<unknown, Argument, object, Validatable<unknown, string>>
    validate<Argument extends unknown>(value: Argument)/*: ReturnSimple<unknown, Argument, object, Instance<unknown, string>> | Instance<Argument, object, true>*/
    {

        return <ReturnSimple<unknown, Argument, object, Validatable<unknown, string>>> {
            valid : typeof value === "string",
            value : value,
            message : 'message'
        }
    }

}
