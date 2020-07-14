import Validator from "../validator";
export default function Validator<Assumption extends Validator<any>>(value: any): value is Assumption;
