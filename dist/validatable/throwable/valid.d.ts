import Validatable from "../validatable";
export default function Valid<ValidatableType extends Validatable>(result: ValidatableType, conversion?: (result: ValidatableType) => string, throwable?: (message: string) => Error): Error;
