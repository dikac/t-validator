import Simple from "./simple";
import SimpleReturn from "./validatable/simple";
import Validatable from "./validatable/validatable";
import Replace from "./validatable/replace";
import Ambiguous from "./validatable/ambiguous";
import CallbackContainer from "@dikac/t-function/callback/callback";
/**
 * adapt callback to {@see Validator}
 */
export default class Callback<Base, Type extends Base, Extent extends Validatable<Base>> implements Simple<Base, Type, Extent>, CallbackContainer<(<Argument extends Base>(argument: Argument) => SimpleReturn<Base, Argument, Type, Extent>)> {
    callback: <Argument extends Base>(argument: Argument) => SimpleReturn<Base, Argument, Type, Extent>;
    /**
     * @param callback
     */
    constructor(callback: <Argument extends Base>(argument: Argument) => SimpleReturn<Base, Argument, Type, Extent>);
    validate<Argument extends Type>(value: Argument): Replace<Argument, true, Extent>;
    validate<Argument extends Base>(value: Argument): Ambiguous<Base, Argument, Type, false, true, Extent>;
}
