import ValidMessage from "../string/valid";
import Function from "@dikac/t-function/function";
import Validatable from "../validatable";

export default function Valid(
    object : Validatable,
    throwable : Function<[Validatable], Error> = (o) => new Error(ValidMessage(o))
) : Error {

    return throwable(object)
}
