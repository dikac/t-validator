import ValidMessage from "../string/valid";
import Validatable from "../validatable";

export default function Valid(
    object : Validatable,
    throwable : (object:Validatable)=>Error = (o) => new Error(ValidMessage(o))
) : Error {

    return throwable(object)
}
