import Simple from "../simple";
export default function Validator<ValidatorT extends Simple>(value: object): value is ValidatorT;
