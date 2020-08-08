import Validator from "../validator";

type Infer<Type> = Type extends Validator<any, infer As> ? As : never;

export default Infer;
