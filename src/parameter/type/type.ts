import Validator from "../../validator";

type Type<Type> = Type extends Validator<any, infer As> ? As : never;

export default Type;
