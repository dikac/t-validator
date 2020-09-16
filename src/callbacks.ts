import Simple from "./simple";
import SimpleReturn from "./validatable/simple";
import Validatable from "./validatable/validatable";
import ValidationCallback from "./validatable/callback-function";
import Ambiguous from "./validatable/ambiguous";

/**
 * create {@see Validator} from multiple callback
 */
export default class Callbacks<
    Base = unknown,
    Type extends Base = Base,
    MessageType = unknown,
    > implements Simple<Base, Type, Readonly<Validatable<Base, MessageType>>>
{
    /**
     * @param validation
     * handle {@see Validatable.valid} call
     *
     * @param message
     * handle {@see Validatable.message} call
     */
    constructor(
        public validation : <Argument extends Base>(argument:Base) => boolean,
        public message : <Argument extends Base>(argument: Omit<SimpleReturn<Base, Argument, Type, Readonly<Validatable<Base, MessageType>>>, 'message'>) => MessageType,
    ) {
    }

    validate<Argument extends Base>(value: Argument) : Ambiguous<Base, Argument, Type, false, true, Validatable<Base, MessageType>>;
    validate<Argument extends Type>(value: Argument) : Validatable<Argument, MessageType, true>;
    validate<Argument extends Base>(value: Argument) {

        return <SimpleReturn<Base, Argument, Type, Readonly<Validatable<Base, MessageType>>>> ValidationCallback(value, this.validation, this.message);
    }
}
