import Validator from "../validator";
declare type Infer<Type extends Validator> = Type extends Validator<any, any, any, any, infer As> ? As : never;
export default Infer;
