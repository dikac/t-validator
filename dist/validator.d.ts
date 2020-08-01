import ReturnConstruct from "./return/return";
import InstanceConstruct from "./parameter/instance/instance";
export default interface Validator<Base = unknown, Type extends Base = Base, Instance extends InstanceConstruct<Base> = InstanceConstruct<Base>> {
    validate<Argument extends Base>(value: Argument): ReturnConstruct<Base, Argument, Type, Instance>;
}
