import Simple from "./simple";
import SimpleReturn from "./validatable/simple";
import Instance from "./validatable/instance";
import ValidationCallback from "./validatable/callback";
import Replace from "./validatable/replace";
import Implement from "./validatable/implement";
import Validatable from "./validatable/validatable";

export default class Callbacks<
    Base = unknown,
    Type extends Base = Base,
    MessageT = unknown,
    > implements Simple<Base, Type, Readonly<Instance<Base, MessageT>>>
{
    constructor(
        public message : <Argument extends Base>(argument: Omit<SimpleReturn<Base, Argument, Type, Readonly<Instance<Base, MessageT>>>, 'message'>) => MessageT,
        public validation : <Argument extends Base>(argument:Base) => boolean,
    ) {
    }

    validate<Argument extends Type>(value: Argument) : Instance<Base, MessageT, true>;
    validate<Argument extends Base>(value: Argument) : Validatable<Base, Argument, Type, false, true, Instance<Base, MessageT>>;
    //validate<Argument extends Base>(value: Argument) : Replace<Argument, false, Instance<Base, MessageT>>;
    validate<Argument extends Base>(value: Argument) : Implement<Type, Argument, false, true, Instance<Base, MessageT>>
    {

        return <SimpleReturn<Base, Argument, Type, Readonly<Instance<Base, MessageT>>>> ValidationCallback(value, this.validation, this.message);
    }
}
