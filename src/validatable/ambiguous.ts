import ReplaceValue from "@dikac/t-value/value/replace";
import ValidatableI from "./validatable";
import ReplaceValidatable from "@dikac/t-validatable/boolean/replace";

type Ambiguous<
    Base = unknown,
    Argument extends Base = Base,
    Type extends Base = Base,
    Ambiguous extends boolean = boolean,
    Match extends boolean = boolean,
    Validatable extends ValidatableI<Base> = ValidatableI<Base>
> =
    ReplaceValue<ReplaceValidatable<Validatable, Match>, Type> |
    ReplaceValue<ReplaceValidatable<Validatable, Ambiguous>, Argument>
;

export default Ambiguous;
