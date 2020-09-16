import Simple from "./simple";
import SimpleReturn from "./validatable/simple";
import Validatable from "./validatable/validatable";
import Ambiguous from "./validatable/ambiguous";
/**
 * create {@see Validator} from multiple callback
 */
export default class Callbacks<Base = unknown, Type extends Base = Base, MessageType = unknown> implements Simple<Base, Type, Readonly<Validatable<Base, MessageType>>> {
    validation: <Argument extends Base>(argument: Base) => boolean;
    message: <Argument extends Base>(argument: Omit<SimpleReturn<Base, Argument, Type, Readonly<Validatable<Base, MessageType>>>, 'message'>) => MessageType;
    /**
     * @param validation
     * handle {@see Validatable.valid} call
     *
     * @param message
     * handle {@see Validatable.message} call
     */
    constructor(validation: <Argument extends Base>(argument: Base) => boolean, message: <Argument extends Base>(argument: Omit<SimpleReturn<Base, Argument, Type, Readonly<Validatable<Base, MessageType>>>, 'message'>) => MessageType);
    validate<Argument extends Base>(value: Argument): Ambiguous<Base, Argument, Type, false, true, Validatable<Base, MessageType>>;
    validate<Argument extends Type>(value: Argument): Validatable<Argument, MessageType, true>;
}
