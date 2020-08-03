import ReplaceValidatable from "@dikac/t-validatable/boolean/replace";
import ReplaceValue from "@dikac/t-value/value/replace";
import Instance from "../parameter/instance/instance";

type Return<
    Base = unknown,
    Argument extends Base = Base,
    Type extends Base = Base,
    Extent extends Instance<Base> = Instance<Base>
> =
    ReplaceValue<ReplaceValidatable<Extent, false>, Argument> |
    ReplaceValue<ReplaceValidatable<Extent, true>, Type>
;

export default Return;
