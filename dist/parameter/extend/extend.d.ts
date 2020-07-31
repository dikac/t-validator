import Validator from "../../validator";
declare type Extend<Type> = Type extends Validator<any, any, infer As> ? As : never;
export default Extend;
