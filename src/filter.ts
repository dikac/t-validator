import Simple from "./simple";
import Infer from "./validatable/infer";
import Validatable from "./validatable/validatable";
import ReturnSimple from "./validatable/simple";
import Instance from "./validatable/instance";
import ValidatorContainer from "./validator/validator";
import Replace from "./validatable/replace";
import OverloadInfer from "./overload/infer";
import ValidatableInfer from "./instance/infer";
import TypeInfer from "./type/infer";
import Validator from "./validator";
import Implement from "./validatable/implement";

export default class Filter<
    Base = unknown,
    Type extends Base = Base,
    Extent extends Instance<Base> = Instance<Base>,
    ValidatorT extends Simple = Simple,
> implements
    Validator<Base, Type, false, true, Extent>,
    ValidatorContainer<ValidatorT>
{
    constructor(
        public validator : ValidatorT,
        public filter : <Argument extends Base>(result:Infer<ValidatorT/*, Base, Argument*/>, argument:Base) => Validatable<Base, Argument, Type, boolean, boolean, Extent>
    ){
    }

    validate<Argument extends Type>(value : Argument) : Replace<Argument, true, Extent>;
    validate<Argument extends Base>(value : Argument) : Validatable<Base, Argument, Type, false, true, Extent>;
    //validate<Argument extends Base>(value : Argument) : Replace<Argument, false, Extent>;

    validate<Argument extends Base>(value : Argument) : Implement<Type, Argument, false, true, Extent>
    {

        let validatable : Infer<ValidatorT/*, Base, Argument*/> = <Infer<ValidatorT/*, Base, Argument*/>> this.validator.validate(value);

        return <ReturnSimple<Base, Argument, Type, Extent>> this.filter(validatable, value);
    }
}

