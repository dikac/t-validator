import Message from "@dikac/t-message/message";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import ReplaceValidatable from "@dikac/t-validatable/boolean/replace";
import ReplaceValue from "@dikac/t-value/value/replace";

type Return<
    Base = unknown,
    Argument extends Base = Base,
    Type extends Base = Base,
    Extent extends Message & Value<Base> & Validatable = Message & Value<Base> & Validatable

> = (ReplaceValue<ReplaceValidatable<Extent, true>, Type>) |
    (ReplaceValue<ReplaceValidatable<Extent, false>, Argument>);

export default Return;
