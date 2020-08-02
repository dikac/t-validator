import Validator from "../validator";
export default function Validator<ValidatorT extends Validator>(value: object): value is ValidatorT;
