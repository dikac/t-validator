import Validator from "../validator";
declare type Parameter<Type> = Type extends Validator<infer As> ? As : never;
export default Parameter;
