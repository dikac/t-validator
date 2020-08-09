import Simple from "./simple";
import SimpleReturn from "./validatable/simple";
import Validatable from "./validatable/validatable";
import Replace from "./validatable/replace";
import Ambiguous from "./validatable/ambiguous";
export default class Callback<Base, Type extends Base, Extent extends Validatable<Base>> implements Simple<Base, Type, Extent> {
    private functions;
    constructor(functions: <Argument extends Base>(argument: Argument) => SimpleReturn<Base, Argument, Type, Extent>);
    validate<Argument extends Type>(value: Argument): Replace<Argument, true, Extent>;
    validate<Argument extends Base>(value: Argument): Ambiguous<Base, Argument, Type, false, true, Extent>;
}
