import Validator from "./validator";
import MessageValue from "@dikac/t-message/message/message";
import Return from "./return/return";
import Instance from "./parameter/instance/instance";
export default class Callbacks<Base = unknown, Type extends Base = Base, Extent extends Instance<Base> = Instance<Base>> implements Validator<Base, Type, Extent> {
    message: <Argument extends Base>(argument: Omit<Return<Base, Argument, Type, Extent>, 'message'>) => MessageValue<Extent>;
    validation: <Argument extends Base>(argument: Base) => boolean;
    constructor(message: <Argument extends Base>(argument: Omit<Return<Base, Argument, Type, Extent>, 'message'>) => MessageValue<Extent>, validation: <Argument extends Base>(argument: Base) => boolean);
    validate<Argument extends Base>(value: Argument): Return<Base, Argument, Type, Extent>;
}
