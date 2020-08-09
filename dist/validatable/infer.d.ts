import Validator from "../validator";
import AmbiguousInterface from "./ambiguous";
declare type Infer<ValidatorT> = ValidatorT extends Validator<infer Base, infer Type, infer Ambiguous, infer Match, infer Validatable> ? AmbiguousInterface<Base, Base, Type, Ambiguous, Match, Validatable> : never;
export default Infer;
