import Validator from "./validator";
import ValidatorContainer from "./validator/validator";
import BaseInfer from "./base/infer";
import TypeInfer from "./type/infer";
import OverloadInfer from "./overload/infer";
import ExtendInfer from "./extend/infer";
import Validatable from "./validatable/validatable";

/**
 * wrapper for {@link Simple}
 */
export default class Wrapper<
    ValidatorT extends Validator
> implements
    Validator<BaseInfer<ValidatorT>, TypeInfer<ValidatorT>, OverloadInfer<ValidatorT>, ExtendInfer<ValidatorT>>,
    ValidatorContainer<ValidatorT>
{
    constructor(
        public validator : ValidatorT
    ){
    }

    validate<Argument extends BaseInfer<ValidatorT>>(
        value : Argument
    ) : Validatable<BaseInfer<ValidatorT>, Argument, TypeInfer<ValidatorT>, OverloadInfer<ValidatorT>, ExtendInfer<ValidatorT>> {

        return <Validatable<BaseInfer<ValidatorT>, Argument, TypeInfer<ValidatorT>, OverloadInfer<ValidatorT>, ExtendInfer<ValidatorT>>>
            this.validator.validate(value);
    }
}

