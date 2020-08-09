import AmbiguousInterface from "./validatable/ambiguous";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Replace from "./validatable/replace";
import Validatable from "./validatable/validatable";

/**
 * {@template Base} type which can be handled by implmentation
 * {@template Type} valid value type
 */
export default interface Validator<
    Base = unknown,
    Type extends Base = Base,
    Ambiguous extends boolean = boolean,
    Match extends boolean = boolean,
    ValidatableT extends Validatable<Base> = Validatable<Base>,
> {
    /**
     * {@param value}
     *
     * @return
     * {@link Value} contain {@param value}
     * {@link Validatable.valid} to determine {@param value} validity
     * {@link Message} explanation in human readable
     */
    validate<Argument extends Type>(value : Argument) : Replace<Argument, Match, ValidatableT>;
    validate<Argument extends Base>(value : Argument) : AmbiguousInterface<Base, Argument, Type, Ambiguous, Match, ValidatableT>;
}

