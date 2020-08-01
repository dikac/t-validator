import Validator from "../../validator";

type Infer<Type> = Type extends Validator<infer As> ? As : never;

export default Infer;
