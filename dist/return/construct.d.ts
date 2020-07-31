import Message from "@dikac/t-message/message";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
declare type Construct<Base = unknown, Argument extends Base = Base, Type extends Base = Base, Extent extends Message = Message> = (Value<Type> & Validatable<true> & Extent) | (Value<Argument> & Validatable<false> & Extent);
export default Construct;
