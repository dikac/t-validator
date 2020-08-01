import Validator from "../../validator";
declare type Infer<Type> = Type extends Validator<any, any, infer As> ? As : never;
export default Infer;
