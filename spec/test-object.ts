import ValidatorSimple from "../dist/simple";
import Instance from "../dist/validatable/instance";
import ReturnSimple from "../dist/validatable/simple";

export default class TestObject implements ValidatorSimple<unknown, object, Instance<unknown, string>> {

    validate<Argument extends unknown>(value: Argument): ReturnSimple<unknown, Argument, object, Instance<unknown, string>>
    validate<Argument extends object>(value: Argument): Instance<Argument, string, true>
    validate<Argument extends unknown>(value: Argument)/*: ReturnSimple<unknown, Argument, object, Instance<unknown, string>> | Instance<Argument, object, true>*/
    {

        return <ReturnSimple<unknown, Argument, object, Instance<unknown, string>>> {
            valid : typeof value === "string",
            value : value,
            message : 'message'
        }
    }

}
