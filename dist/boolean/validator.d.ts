import Validator from "../validator";
export default function Validator<Assumption extends Validator>(value: any): value is Assumption;
