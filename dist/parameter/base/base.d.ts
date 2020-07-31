import Validator from "../../validator";
declare type Base<Type> = Type extends Validator<infer As> ? As : never;
export default Base;
