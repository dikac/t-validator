import Validator from "./validator";
import BaseInfer from "./parameter/base/infer";
import TypeInfer from "./parameter/type/infer";
import InstanceInfer from "./parameter/instance/infer";
import Return from "./return/return";
/**
 * wrapper for {@link Validator}
 */
export default class Wrapper<ValidatorT extends Validator> implements Validator<BaseInfer<ValidatorT>, TypeInfer<ValidatorT>, InstanceInfer<ValidatorT>> {
    subject: ValidatorT;
    constructor(subject: ValidatorT);
    validate<Argument extends BaseInfer<ValidatorT>>(value: Argument): Return<BaseInfer<ValidatorT>, Argument, TypeInfer<ValidatorT>, InstanceInfer<ValidatorT>>;
}
