import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";

export default function Number(value : unknown) : (Validatable<true> & Value<number>) | (Validatable<false> & Value<unknown>) {

    return <(Validatable<true> & Value<number>) | (Validatable<false> & Value<unknown>)> {
        value : value,
        valid : typeof value === "number"
    }
}
