import Validator from "../Validator";

type Validatable<Type> = Type extends Validator<any, infer As> ? As : never;

export default Validatable;
