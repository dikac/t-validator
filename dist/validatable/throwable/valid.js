import ValueMessage from "@dikac/t-message/message/value";
import SafeCast from "@dikac/t-string/safe-cast";
import New from "@dikac/t-function/new";
export default function Valid(result, conversion = (result) => SafeCast(ValueMessage(result)), throwable = New(Error)) {
    return throwable(conversion(result));
}
//# sourceMappingURL=valid.js.map