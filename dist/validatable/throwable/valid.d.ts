import Validatable from "../validatable";
export default function Valid(object: Validatable, throwable?: (object: Validatable) => Error): Error;
