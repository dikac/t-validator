import Simple from "./simple";
import Infer from "./validatable/infer";
import Ambiguous from "./validatable/ambiguous";
import Validatable from "./validatable/validatable";
import ValidatorContainer from "./validator/validator";
import Replace from "./validatable/replace";
import Validator from "./validator";
export default class Filter<Base = unknown, Type extends Base = Base, Extent extends Validatable<Base> = Validatable<Base>, ValidatorT extends Simple = Simple> implements Validator<Base, Type, false, true, Extent>, ValidatorContainer<ValidatorT> {
    validator: ValidatorT;
    filter: <Argument extends Base>(result: Infer<ValidatorT>, argument: Base) => Ambiguous<Base, Argument, Type, boolean, boolean, Extent>;
    constructor(validator: ValidatorT, filter: <Argument extends Base>(result: Infer<ValidatorT>, argument: Base) => Ambiguous<Base, Argument, Type, boolean, boolean, Extent>);
    validate<Argument extends Type>(value: Argument): Replace<Argument, true, Extent>;
    validate<Argument extends Base>(value: Argument): Ambiguous<Base, Argument, Type, false, true, Extent>;
}
