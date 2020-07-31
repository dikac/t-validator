import Validator from "./validator";
import Message from "@dikac/t-message/message";
import Construct from "./return/construct";
export default class Callback<Base = unknown, Type extends Base = Base, Extent extends Message = Message> implements Validator<Base, Type, Extent> {
    private functions;
    constructor(functions: <Argument extends Base>(argument: Base) => Construct<Base, Argument, Type, Extent>);
    validate<Argument extends Base>(value: Argument): Construct<Base, Argument, Type, Extent>;
}
