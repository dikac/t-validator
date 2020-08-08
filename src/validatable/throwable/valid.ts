import ValidMessage from "../string/valid";
import Function from "@dikac/t-function/function";
import Instance from "../instance";

export default function Valid(
    object : Instance,
    throwable : Function<[Instance], Error> = (o) => new Error(ValidMessage(o))
) : Error {

    return throwable(object)
}
