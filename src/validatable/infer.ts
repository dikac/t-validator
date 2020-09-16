import Validator from "../validator";
import AmbiguousInterface from "./ambiguous";

type Infer<ValidatorType> = ValidatorType extends Validator<
    infer Base,
    infer Type,
    infer Ambiguous,
    infer Match,
    infer Validatable
> ? AmbiguousInterface<Base, Base, Type, Ambiguous, Match, Validatable> : never;

export default Infer;
