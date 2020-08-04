import Validator from "./validator";
import Infer from "./return/infer";
import Return from "./return/return";
import Instance from "./parameter/instance/instance";
import ValidatorContainer from "./validator/validator";


export default class Filter<
    Base = unknown,
    Type extends Base = Base,
    Extent extends Instance<Base> = Instance<Base>,
    ValidatorT extends Validator = Validator,
> implements
    Validator<Base, Type, Extent>,
    ValidatorContainer<ValidatorT>
{

    constructor(
        public validator : ValidatorT,
        public filter : <Argument extends Base>(result:Infer<ValidatorT>, argument:Base) => Return<Base, Argument, Type, Extent>
    ){
    }

    validate<Argument extends Base>(value : Argument) : Return<Base, Argument, Type, Extent> {

        let validatable : Infer<ValidatorT> = <Infer<ValidatorT>> this.validator.validate(value);

        return this.filter(validatable, value);
    }
}

