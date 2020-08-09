import Simple from "./simple";
import Infer from "./validatable/infer";
import Validatable from "./validatable/validatable";
import Instance from "./validatable/instance";
import ValidatorContainer from "./validator/validator";
import Replace from "./validatable/replace";
import Validator from "./validator";
export default class Filter<Base = unknown, Type extends Base = Base, Extent extends Instance<Base> = Instance<Base>, ValidatorT extends Simple = Simple> implements Validator<Base, Type, false, true, Extent>, ValidatorContainer<ValidatorT> {
    validator: ValidatorT;
    filter: <Argument extends Base>(result: Infer<ValidatorT>, argument: Base) => Validatable<Base, Argument, Type, boolean, boolean, Extent>;
    constructor(validator: ValidatorT, filter: <Argument extends Base>(result: Infer<ValidatorT>, argument: Base) => Validatable<Base, Argument, Type, boolean, boolean, Extent>);
    validate<Argument extends Type>(value: Argument): Replace<Argument, true, Extent>;
    validate<Argument extends Base>(value: Argument): Validatable<Base, Argument, Type, false, true, Extent>;
}
