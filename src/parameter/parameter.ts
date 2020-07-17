import Validator from "../validator";

type Parameter<Type> = Type extends Validator<infer As> ? As : never;

export default Parameter;
