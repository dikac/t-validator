import Validator from "../validator";
export default function Type<Assumption extends Validator<any>>(value: any): value is Assumption;
