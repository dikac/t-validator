import ValidatorSimple from "../dist/simple";
import Instance from "../dist/validatable/instance";
import ReturnSimple from "../dist/validatable/simple";

export default class TestString implements ValidatorSimple<unknown, string, Instance<unknown, string>> {

    validate<Argument extends unknown>(value: Argument): ReturnSimple<unknown, Argument, string, Instance<unknown, string>>
    validate<Argument extends string>(value: Argument): Instance<Argument, string, true>
    validate<Argument extends unknown>(value: Argument): ReturnSimple<unknown, Argument, string, Instance<unknown, string>> | Instance<Argument, string, true>
    {

        return <ReturnSimple<unknown, Argument, string, Instance<unknown, string>>> {
            valid : typeof value === "string",
            value : value,
            message : 'message'
        }
    }

}
