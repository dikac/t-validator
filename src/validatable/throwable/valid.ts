import Validatable from "../validatable";
import ValueMessage from "@dikac/t-message/message/value";
import SafeCast from "@dikac/t-string/safe-cast";
import New from "@dikac/t-function/new";

export default function Valid<ValidatableType extends Validatable>(
    result : ValidatableType,
    conversion : (result : ValidatableType) => string = (result)=>SafeCast(ValueMessage(result)),
    throwable : (message:string)=>Error = New(Error)
) : Error {

    return throwable(conversion(result))
}
