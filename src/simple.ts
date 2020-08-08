import Instance from "./validatable/instance";
import Validator from "./validator";
import ReplaceValidatable from "@dikac/t-validatable/boolean/replace";
import ReplaceInterface from "@dikac/t-validatable/validatable";
import ReplaceValue from "@dikac/t-value/value/replace";

/**
 * simple implementation of {@see Validator}
 */

type Simple<
    Base = unknown,
    Type extends Base = Base,
    InstanceT extends Instance<Base> = Instance<Base>
> = Validator<
    Base,
    Type,
    ReplaceValidatable<InstanceT, false>,
    ReplaceValue<ReplaceValidatable<InstanceT, true>, Type>
>;
export default Simple;
