import Simple from "./simple";
import Infer from "./validatable/infer";
import Validatable from "./validatable/validatable";
import ReturnSimple from "./validatable/simple";
import Instance from "./validatable/instance";
import ValidatorContainer from "./validator/validator";

export default class Filter<
    Base = unknown,
    Type extends Base = Base,
    Extent extends Instance<Base> = Instance<Base>,
    ValidatorT extends Simple = Simple,
> implements
    Simple<Base, Type, Extent>,
    ValidatorContainer<ValidatorT>
{
    constructor(
        public validator : ValidatorT,
        public filter : <Argument extends Base>(result:Infer<ValidatorT/*, Base*/>, argument:Base) => Validatable<Base, Argument, Type, Extent>
    ){
    }

    validate<Argument extends Base>(value : Argument) : ReturnSimple<Base, Argument, Type, Extent> {

        let validatable : Infer<ValidatorT/*, Argument*/> = <Infer<ValidatorT/*, Argument*/>> this.validator.validate(value);

        return <ReturnSimple<Base, Argument, Type, Extent>> this.filter(validatable, value);
    }
}

