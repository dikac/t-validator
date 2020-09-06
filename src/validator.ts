import AmbiguousInterface from "./validatable/ambiguous";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Replace from "./validatable/replace";
import Validatable from "./validatable/validatable";

/**
 * {@template Base} type which can be handled by implementation
 * {@template Type} valid value type
 *
 * {@template Ambiguous} result to be used for {@template Base} or if {@template Argument} extends {@template Base}
 * {@template Match} result to be used for {@template Match} or if {@template Argument} extends {@template Match}
 * {@template ValidatableType} return value for {@see Validator.validate}
 */
export default interface Validator<
    Base = unknown,
    Type extends Base = Base,
    Ambiguous extends boolean = boolean,
    Match extends boolean = boolean,
    ValidatableType extends Validatable<Base> = Validatable<Base>,
> {
    /**
     * {@param value}
     *
     * @return
     * {@link Value} contain {@param value}
     * {@link Validatable.valid} to determine {@param value} validity
     * {@link Message} explanation in human readable
     */
    validate<Argument extends Type>(value : Argument) : Replace<Argument, Match, ValidatableType>;
    validate<Argument extends Base>(value : Argument) : AmbiguousInterface<Base, Argument, Type, Ambiguous, Match, ValidatableType>;
}

