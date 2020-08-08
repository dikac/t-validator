import ReplaceValue from "@dikac/t-value/value/replace";
import Instance from "./validatable/instance";
import Validatable from "./validatable/validatable";
/**
 * {@template Base} type which can be handled by implmentation
 * {@template Type} valid value type
 */
export default interface Validator<Base = unknown, Type extends Base = Base, Overload extends Instance<Base> = Instance<Base>, Extend extends Instance<Type> = ReplaceValue<Overload, Type>> {
    /**
     * {@param value}
     *
     * @return
     * {@link Value} contain {@param value}
     * {@link ValidatableInterface} to determine {@param value} validity
     * {@link Message} explain in human readable
     */
    validate<Argument extends Base>(value: Argument): Validatable<Base, Argument, Type, Overload, Extend>;
}
