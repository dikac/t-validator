import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";

export default function Equal(
    object : Validatable & Value<[unknown, unknown]>
) : string {

    if(object.valid) {

        return `value is equal`;

    } else {

        return `value is not equal`;
    }
}
