import Validator from "../../validator";

type Base<Type> = Type extends Validator<infer As> ? As : never;

export default Base;
