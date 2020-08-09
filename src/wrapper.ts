import Validator from "./validator";
import ValidatorContainer from "./validator/validator";
import BaseInfer from "./base/infer";
import TypeInfer from "./type/infer";
import AmbiguousInfer from "./ambiguous/infer";
import MatchInfer from "./match/infer";
import ValidatableInfer from "./instance/infer";
import Replace from "./validatable/replace";
import Simple from "./validatable/simple";


/**
 * wrapper for {@link Simple}
 */
export default class Wrapper<
    ValidatorT extends Validator
> implements
    Validator<BaseInfer<ValidatorT>, TypeInfer<ValidatorT>, AmbiguousInfer<ValidatorT>, MatchInfer<ValidatorT>>,
    ValidatorContainer<ValidatorT>
{
    constructor(
        public validator : ValidatorT
    ){
    }

    validate<Argument extends BaseInfer<ValidatorT>>(value : Argument) : Simple<BaseInfer<ValidatorT>, Argument, TypeInfer<ValidatorT>, ValidatableInfer<ValidatorT>>

    validate<Argument extends TypeInfer<ValidatorT>>(value : Argument) : Replace<Argument, MatchInfer<ValidatorT>, ValidatableInfer<ValidatorT>>

    validate<Argument extends BaseInfer<ValidatorT>>(value : Argument)  {
        return  this.validator.validate(value);
    }
}

