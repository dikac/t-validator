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
    MessageT = unknown,
    > implements Simple<Base, Type, Readonly<Validatable<Base, MessageT>>>
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
        public message : <Argument extends Base>(argument: Omit<SimpleReturn<Base, Argument, Type, Readonly<Validatable<Base, MessageT>>>, 'message'>) => MessageT,
    ) {
    }

    validate<Argument extends Base>(value: Argument) : Ambiguous<Base, Argument, Type, false, true, Validatable<Base, MessageT>>;
    validate<Argument extends Type>(value: Argument) : Validatable<Argument, MessageT, true>;
    validate<Argument extends Base>(value: Argument) {

        return <SimpleReturn<Base, Argument, Type, Readonly<Validatable<Base, MessageT>>>> ValidationCallback(value, this.validation, this.message);
    }
}
