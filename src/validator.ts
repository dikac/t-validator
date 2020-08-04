import ReturnConstruct from "./return/return";
import InstanceConstruct from "./parameter/instance/instance";
import ValidatorAbstract from "./validator-abstract";
import ReplaceValidatable from "@dikac/t-validatable/boolean/replace";
import ReplaceValue from "@dikac/t-value/value/replace";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";

/**
 * validate value
 */
export default interface Validator<
    Base = unknown,
    Type extends Base = Base,
    Instance extends InstanceConstruct<Base> = InstanceConstruct<Base>
> extends ValidatorAbstract<
    Base,
    ReplaceValidatable<Instance, false>,
    ReplaceValue<ReplaceValidatable<Instance, true>, Type>
> {

    /**
     * @param value
     *
     * @return
     * @link Value contain {@param value}
     * @link Validatable to determine {@param value} validity
     * @link Message explain in human readable
     */
    validate<Argument extends Base>(value : Argument) : ReturnConstruct<Base, Argument, Type, Instance>;
}

