import Validator from "../../validator";
declare type Type<Type> = Type extends Validator<any, infer As> ? As : never;
export default Type;
