import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";

export default function Valid(
    object : Validatable & Value
) : string {

    if(object.valid) {

        return `Validatable is valid`;

    } else {

        return `Validatable is not valid`;
    }
}
