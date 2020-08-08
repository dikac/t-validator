import ReplaceValidatable from "@dikac/t-validatable/boolean/replace";
import ReplaceValue from "@dikac/t-value/value/replace";
import Instance from "./instance";
import Validatable from "./validatable";

type Simple<
    Base = unknown,
    Argument extends Base = Base,
    Type extends Base = Base,
    Extent extends Instance<Base> = Instance<Base>
> = Validatable<
    Base,
    Argument,
    Type,
    ReplaceValidatable<Extent, false>,
    ReplaceValue<ReplaceValidatable<Extent, true>, Type>
>;

export default Simple;
