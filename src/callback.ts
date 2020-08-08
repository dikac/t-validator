import Simple from "./simple";
import SimpleReturn from "./validatable/simple";
import Instance from "./validatable/instance";

export default class Callback<
    Base,
    Type extends Base,
    Extent extends Instance<Base>
> implements Simple<Base, Type, Extent> {

    constructor(
        private functions : <Argument extends Base>(argument : Argument) => SimpleReturn<Base, Argument, Type, Extent>,
    ) {
    }

    validate<Argument extends Base>(value: Argument) : SimpleReturn<Base, Argument, Type, Extent> {

        return this.functions(value);
    }
}
