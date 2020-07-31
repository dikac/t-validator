import Validator from "./validator";
import Message from "@dikac/t-message/message";
import MessageValue from "@dikac/t-message/message/message";
import Construct from "./return/construct";
export default class Callbacks<Base = unknown, Type extends Base = Base, Extent extends Message = Message> implements Validator<Base, Type, Extent> {
    message: <Argument extends Base>(argument: Omit<Construct<Base, Argument, Type, Extent>, 'message'>) => MessageValue<Extent>;
    validation: <Argument extends Base>(argument: Base) => boolean;
    constructor(message: <Argument extends Base>(argument: Omit<Construct<Base, Argument, Type, Extent>, 'message'>) => MessageValue<Extent>, validation: <Argument extends Base>(argument: Base) => boolean);
    validate<Argument extends Base>(value: Argument): Readonly<Construct<Base, Argument, Type, Extent>>;
}
