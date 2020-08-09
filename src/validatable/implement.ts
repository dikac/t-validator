import ValidatableI from "./validatable";
import Replace from "./replace";

type Implement<
    Type,
    Argument,
    Ambiguous extends boolean,
    Match extends boolean,
    Validatable extends ValidatableI
> =
    Replace<Argument, Match, Validatable> |
    Replace<Type, Match, Validatable> |
    Replace<Argument, Ambiguous, Validatable>
;

export default Implement;
