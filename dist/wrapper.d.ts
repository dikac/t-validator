import Validator from "./validator";
import BaseInfer from "./parameter/base/infer";
import TypeInfer from "./parameter/type/infer";
import InstanceInfer from "./parameter/instance/infer";
import Return from "./return/return";
/**
 * wrapper for {@link Validator}
 */
export default class Wrapper<Container extends Validator> implements Validator<BaseInfer<Container>, TypeInfer<Container>, InstanceInfer<Container>> {
    subject: Container;
    constructor(subject: Container);
    validate<Argument extends BaseInfer<Container>>(value: Argument): Return<BaseInfer<Container>, Argument, TypeInfer<Container>, InstanceInfer<Container>>;
}
