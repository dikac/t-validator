import Validator from "../Validator";

type Argument<Type> = Type extends Validator<infer As> ? As : never;

export default Argument;
