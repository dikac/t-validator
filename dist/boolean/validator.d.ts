import Validator from "../validator";
export default function Validator<Assumption extends Validator>(value: object): value is Assumption;
