import Validator from "../validator";
import Validatable from "./validatable";
declare type Infer<Type> = Type extends Validator<infer Base, infer Type, infer Instance, infer Extend> ? Validatable<Base, Base, Type, Instance, Extend> : never;
export default Infer;
