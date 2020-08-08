import ReplaceValue from "@dikac/t-value/value/replace";
import Instance from "./instance";
declare type Validatable<Base = unknown, Argument extends Base = Base, Type extends Base = Base, Overload extends Instance<Base> = Instance<Base>, Extend extends Instance<Type> = Instance<Type>> = (ReplaceValue<Overload, Argument>) | (Argument extends Type ? ReplaceValue<Extend, Argument> : Extend);
export default Validatable;
