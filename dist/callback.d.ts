import Simple from "./simple";
import SimpleReturn from "./validatable/simple";
import Instance from "./validatable/instance";
export default class Callback<Base, Type extends Base, Extent extends Instance<Base>> implements Simple<Base, Type, Extent> {
    private functions;
    constructor(functions: <Argument extends Base>(argument: Argument) => SimpleReturn<Base, Argument, Type, Extent>);
    validate<Argument extends Base>(value: Argument): SimpleReturn<Base, Argument, Type, Extent>;
}
