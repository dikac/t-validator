import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";

export default function String(value : unknown) : (Validatable<true> & Value<string>) | (Validatable<false> & Value<unknown>) {

    return <(Validatable<true> & Value<string>) | (Validatable<false> & Value<unknown>)> {
        value : value,
        valid : typeof value === "string"
    }
}
