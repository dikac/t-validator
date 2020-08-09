import ValidatorSimple from "../dist/simple";
import Instance from "../dist/validatable/instance";
import ReturnSimple from "../dist/validatable/simple";

export default class TestReadonly implements ValidatorSimple<unknown, string, Readonly<Instance<unknown, string>>> {

    validate<Argument extends unknown>(value: Argument): ReturnSimple<unknown, Argument, string, Readonly<Instance<unknown, string>>>
    validate<Argument extends string>(value: Argument): Readonly<Instance<Argument, string, true>>
    validate<Argument extends unknown>(value: Argument): ReturnSimple<unknown, Argument, string, Readonly<Instance<unknown, string>>> | Readonly<Instance<Argument, string, true>>
    {

        return <ReturnSimple<unknown, Argument, string, Instance<unknown, string>>> {
            valid : typeof value === "string",
            value : value,
            message : 'message'
        }
    }

}
