import Validator from "../validator";
import Construct from "./construct";
declare type Return<Type> = Type extends Validator<infer Base, infer Type, infer Extend> ? Construct<Base, Base, Type, Extend> : never;
export default Return;
