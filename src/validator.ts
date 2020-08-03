import ReturnConstruct from "./return/return";
import InstanceConstruct from "./parameter/instance/instance";
import ValidatorAbstract from "./validator-abstract";
import ReplaceValidatable from "@dikac/t-validatable/boolean/replace";
import ReplaceValue from "@dikac/t-value/value/replace";

export default interface Validator<
    Base = unknown,
    Type extends Base = Base,
    Instance extends InstanceConstruct<Base> = InstanceConstruct<Base>
> extends ValidatorAbstract<
    Base,
    ReplaceValidatable<Instance, false>,
    ReplaceValue<ReplaceValidatable<Instance, true>, Type>
> {

    validate<Argument extends Base>(value : Argument) : ReturnConstruct<Base, Argument, Type, Instance>;
}

