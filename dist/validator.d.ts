import InstanceInterface from "./validatable/instance";
import Validatable from "./validatable/validatable";
import Replace from "./validatable/replace";
/**
 * {@template Base} type which can be handled by implmentation
 * {@template Type} valid value type
 */
export default interface Validator<Base = unknown, Type extends Base = Base, Overload extends boolean = boolean, Extend extends boolean = boolean, Instance extends InstanceInterface<Base> = InstanceInterface<Base>> {
    /**
     * {@param value}
     *
     * @return
     * {@link Value} contain {@param value}
     * {@link ValidatableInterface} to determine {@param value} validity
     * {@link Message} explanation in human readable
     */
    validate<Argument extends Type>(value: Argument): Replace<Argument, Extend, Instance>;
    validate<Argument extends Base>(value: Argument): Validatable<Base, Argument, Type, Overload, Extend, Instance>;
}
