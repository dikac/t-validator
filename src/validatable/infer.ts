import Validator from "../validator";
import Validatable from "./validatable";

type Infer<ValidatorT/*, Base , Argument extends Base*/> = ValidatorT extends Validator<
    infer Base,
    infer Type,
    infer Overload,
    infer Extend,
    infer Instance
> ? Validatable<Base, Base, Type, Overload, Extend, Instance> : never;

export default Infer;
