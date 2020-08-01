import Validator from "../../validator";
declare type Infer<Type> = Type extends Validator<infer As> ? As : never;
export default Infer;
