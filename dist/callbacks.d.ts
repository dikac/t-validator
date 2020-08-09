import Simple from "./simple";
import SimpleReturn from "./validatable/simple";
import Instance from "./validatable/instance";
import Validatable from "./validatable/validatable";
export default class Callbacks<Base = unknown, Type extends Base = Base, MessageT = unknown> implements Simple<Base, Type, Readonly<Instance<Base, MessageT>>> {
    message: <Argument extends Base>(argument: Omit<SimpleReturn<Base, Argument, Type, Readonly<Instance<Base, MessageT>>>, 'message'>) => MessageT;
    validation: <Argument extends Base>(argument: Base) => boolean;
    constructor(message: <Argument extends Base>(argument: Omit<SimpleReturn<Base, Argument, Type, Readonly<Instance<Base, MessageT>>>, 'message'>) => MessageT, validation: <Argument extends Base>(argument: Base) => boolean);
    validate<Argument extends Type>(value: Argument): Instance<Base, MessageT, true>;
    validate<Argument extends Base>(value: Argument): Validatable<Base, Argument, Type, false, true, Instance<Base, MessageT>>;
}
