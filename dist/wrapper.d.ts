import Validator from "./validator";
import ValidatorContainer from "./validator/validator";
import BaseInfer from "./base/infer";
import TypeInfer from "./type/infer";
import OverloadInfer from "./overload/infer";
import ExtendInfer from "./extend/infer";
import ValidatableInfer from "./instance/infer";
import Replace from "./validatable/replace";
import Simple from "./validatable/simple";
/**
 * wrapper for {@link Simple}
 */
export default class Wrapper<ValidatorT extends Validator> implements Validator<BaseInfer<ValidatorT>, TypeInfer<ValidatorT>, OverloadInfer<ValidatorT>, ExtendInfer<ValidatorT>>, ValidatorContainer<ValidatorT> {
    validator: ValidatorT;
    constructor(validator: ValidatorT);
    validate<Argument extends BaseInfer<ValidatorT>>(value: Argument): Simple<BaseInfer<ValidatorT>, Argument, TypeInfer<ValidatorT>, ValidatableInfer<ValidatorT>>;
    validate<Argument extends TypeInfer<ValidatorT>>(value: Argument): Replace<Argument, ExtendInfer<ValidatorT>, ValidatableInfer<ValidatorT>>;
}
