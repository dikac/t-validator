import Simple from "./simple";
import SimpleReturn from "./validatable/simple";
import Validatable from "./validatable/validatable";
import ValidationCallback from "./validatable/callback";
import Ambiguous from "./validatable/ambiguous";

export default class Callbacks<
    Base = unknown,
    Type extends Base = Base,
    MessageT = unknown,
    > implements Simple<Base, Type, Readonly<Validatable<Base, MessageT>>>
{
    constructor(
        public message : <Argument extends Base>(argument: Omit<SimpleReturn<Base, Argument, Type, Readonly<Validatable<Base, MessageT>>>, 'message'>) => MessageT,
        public validation : <Argument extends Base>(argument:Base) => boolean,
    ) {
    }

    validate<Argument extends Base>(value: Argument) : Ambiguous<Base, Argument, Type, false, true, Validatable<Base, MessageT>>;
    validate<Argument extends Type>(value: Argument) : Validatable<Argument, MessageT, true>;
    validate<Argument extends Base>(value: Argument) {

        return <SimpleReturn<Base, Argument, Type, Readonly<Validatable<Base, MessageT>>>> ValidationCallback(value, this.validation, this.message);
    }
}
