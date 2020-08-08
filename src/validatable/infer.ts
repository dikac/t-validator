import Validator from "../validator";
import Validatable from "./validatable";
import BaseInfer from "../base/infer";

type Infer<Type> = Type extends Validator<
    infer Base,
    infer Type,
    infer Instance,
    infer Extend
> ? Validatable<Base, Base, Type, Instance, Extend> : never;

export default Infer;
