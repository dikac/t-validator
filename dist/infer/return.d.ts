import Validator from "../Validator";
declare type Return<Type> = Type extends Validator<any, infer As> ? As : never;
export default Return;
