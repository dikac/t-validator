import Validator from "./validator";
import Return from "./return/return";
import Instance from "./parameter/instance/instance";

export default class Callback<
    Base = unknown,
    Type extends Base = Base,
    Extent extends Instance<Base> = Instance<Base>
    > implements Validator<Base, Type, Extent>
{

    constructor(
        private functions : <Argument extends Base>(argument:Base) => Return<Base, Argument, Type, Extent>,
    ) {

    }

    validate<Argument extends Base>(value: Argument) : Return<Base, Argument, Type, Extent> {

        return this.functions(value);
    }
}
