import Validator from "../Validator";

type Return<Type> = Type extends Validator<any, infer As> ? As : never;

export default Return;
