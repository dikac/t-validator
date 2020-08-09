import Simple from "./simple";
import SimpleReturn from "./validatable/simple";
import Instance from "./validatable/instance";
import Replace from "./validatable/replace";
import Validatable from "./validatable/validatable";
export default class Callback<Base, Type extends Base, Extent extends Instance<Base>> implements Simple<Base, Type, Extent> {
    private functions;
    constructor(functions: <Argument extends Base>(argument: Argument) => SimpleReturn<Base, Argument, Type, Extent>);
    validate<Argument extends Type>(value: Argument): Replace<Argument, true, Extent>;
    validate<Argument extends Base>(value: Argument): Validatable<Base, Argument, Type, false, true, Extent>;
}
