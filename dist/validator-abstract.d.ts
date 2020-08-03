import ReplaceValue from "@dikac/t-value/value/replace";
import Instance from "./parameter/instance/instance";
export default interface ValidatorAbstract<Base = unknown, Overload extends Instance<Base> = Instance<Base>, Origin extends Instance<Base> = Instance<Base>> {
    validate<Argument extends Base>(value: Argument): ReplaceValue<Overload, Argument> | Origin;
}
