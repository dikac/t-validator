import Validator from "../validator";
import Validatable from "./validatable";
declare type Infer<Type, Base, Argument extends Base = Base> = Type extends Validator<Base, infer Type, infer Instance, infer Extend> ? Validatable<Base, Argument, Type, Instance, Extend> : never;
export default Infer;
