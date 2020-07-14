import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";

export default function Object_(value : unknown) : (Validatable<true> & Value<object>) | (Validatable<false> & Value<unknown>) {

    return <(Validatable<true> & Value<object>) | (Validatable<false> & Value<unknown>)> {
        value : value,
        valid : typeof value === "object"
    }
}
