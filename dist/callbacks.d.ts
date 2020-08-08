import Simple from "./simple";
import SimpleReturn from "./validatable/simple";
import Instance from "./validatable/instance";
export default class Callbacks<Base = unknown, Type extends Base = Base, MessageT = unknown> implements Simple<Base, Type, Readonly<Instance<Base, MessageT>>> {
    message: <Argument extends Base>(argument: Omit<SimpleReturn<Base, Argument, Type, Readonly<Instance<Base, MessageT>>>, 'message'>) => MessageT;
    validation: <Argument extends Base>(argument: Base) => boolean;
    constructor(message: <Argument extends Base>(argument: Omit<SimpleReturn<Base, Argument, Type, Readonly<Instance<Base, MessageT>>>, 'message'>) => MessageT, validation: <Argument extends Base>(argument: Base) => boolean);
    validate<Argument extends Base>(value: Argument): SimpleReturn<Base, Argument, Type, Readonly<Instance<Base, MessageT>>>;
}
