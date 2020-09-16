import Simple from "./simple";
import Infer from "./validatable/infer";
import Ambiguous from "./validatable/ambiguous";
import ReturnSimple from "./validatable/simple";
import Validatable from "./validatable/validatable";
import ValidatorContainer from "./validator/validator";
import Replace from "./validatable/replace";
import Validator from "./validator";

export default class Filter<
    Base = unknown,
    Type extends Base = Base,
    Extent extends Validatable<Base> = Validatable<Base>,
    ValidatorType extends Simple = Simple,
> implements
    Validator<Base, Type, false, true, Extent>,
    ValidatorContainer<ValidatorType>
{
    constructor(
        public validator : ValidatorType,
        public filter : <Argument extends Base>(result:Infer<ValidatorType>, argument:Base) => Ambiguous<Base, Argument, Type, boolean, boolean, Extent>
    ){
    }

    validate<Argument extends Type>(value : Argument) : Replace<Argument, true, Extent>;
    validate<Argument extends Base>(value : Argument) : Ambiguous<Base, Argument, Type, false, true, Extent>;

    validate<Argument extends Base>(value : Argument) {
        let validatable : Infer<ValidatorType> = <Infer<ValidatorType>> this.validator.validate(value);

        return <ReturnSimple<Base, Argument, Type, Extent>> this.filter(validatable, value);
    }
}

