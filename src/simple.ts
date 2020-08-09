import Instance from "./validatable/instance";
import Validator from "./validator";

/**
 * simple implementation of {@see Validator}
 */

type Simple<
    Base = unknown,
    Type extends Base = Base,
    InstanceT extends Instance<Base> = Instance<Base>
> = Validator<Base, Type, false, true, InstanceT>;
export default Simple;
