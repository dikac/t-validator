import Simple from "../simple";
export default function Validator<ValidatorType extends Simple>(value: object): value is ValidatorType;
