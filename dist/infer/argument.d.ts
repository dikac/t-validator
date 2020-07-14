import Validator from "../Validator";
declare type Argument<Type> = Type extends Validator<infer As> ? As : never;
export default Argument;
