import Simple from "./simple";
import SimpleReturn from "./validatable/simple";
import Validatable from "./validatable/validatable";
import Ambiguous from "./validatable/ambiguous";
export default class Callbacks<Base = unknown, Type extends Base = Base, MessageT = unknown> implements Simple<Base, Type, Readonly<Validatable<Base, MessageT>>> {
    validation: <Argument extends Base>(argument: Base) => boolean;
    message: <Argument extends Base>(argument: Omit<SimpleReturn<Base, Argument, Type, Readonly<Validatable<Base, MessageT>>>, 'message'>) => MessageT;
    constructor(validation: <Argument extends Base>(argument: Base) => boolean, message: <Argument extends Base>(argument: Omit<SimpleReturn<Base, Argument, Type, Readonly<Validatable<Base, MessageT>>>, 'message'>) => MessageT);
    validate<Argument extends Base>(value: Argument): Ambiguous<Base, Argument, Type, false, true, Validatable<Base, MessageT>>;
    validate<Argument extends Type>(value: Argument): Validatable<Argument, MessageT, true>;
}
