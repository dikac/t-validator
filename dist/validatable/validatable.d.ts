import ReplaceValue from "@dikac/t-value/value/replace";
import InstanceInterface from "./instance";
import ValidatableReplace from "@dikac/t-validatable/boolean/replace";
declare type Validatable<Base = unknown, Argument extends Base = Base, Type extends Base = Base, Overload extends boolean = boolean, Extend extends boolean = boolean, Instance extends InstanceInterface<Base> = InstanceInterface<Base>> = ReplaceValue<ValidatableReplace<Instance, Extend>, Argument extends Type ? Argument : Type> | ReplaceValue<ValidatableReplace<Instance, Overload>, Argument>;
export default Validatable;
