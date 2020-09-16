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
export default class Wrapper<ValidatorType extends Validator> implements Validator<BaseInfer<ValidatorType>, TypeInfer<ValidatorType>, AmbiguousInfer<ValidatorType>, MatchInfer<ValidatorType>>, ValidatorContainer<ValidatorType> {
    validator: ValidatorType;
    constructor(validator: ValidatorType);
    validate<Argument extends BaseInfer<ValidatorType>>(value: Argument): Simple<BaseInfer<ValidatorType>, Argument, TypeInfer<ValidatorType>, ValidatableInfer<ValidatorType>>;
    validate<Argument extends TypeInfer<ValidatorType>>(value: Argument): Replace<Argument, MatchInfer<ValidatorType>, ValidatableInfer<ValidatorType>>;
}
