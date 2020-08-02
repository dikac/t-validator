import Validator from "./validator";
import Infer from "./return/infer";
import Return from "./return/return";
import Instance from "./parameter/instance/instance";
export default class Filter<Base = unknown, Type extends Base = Base, Extent extends Instance<Base> = Instance<Base>, ValidatorT extends Validator = Validator> implements Validator<Base, Type, Extent> {
    subject: ValidatorT;
    filter: <Argument extends Base>(result: Infer<ValidatorT>, argument: Base) => Return<Base, Argument, Type, Extent>;
    constructor(subject: ValidatorT, filter: <Argument extends Base>(result: Infer<ValidatorT>, argument: Base) => Return<Base, Argument, Type, Extent>);
    validate<Argument extends Base>(value: Argument): Return<Base, Argument, Type, Extent>;
}
