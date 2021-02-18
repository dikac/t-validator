import Simple from "./simple";
import Validatable from "./validatable/validatable";
import Equal from "./equal";
import EqualMessage from "./validatable/string/equal";

export default function EqualStandard<
    Base = unknown,
    Type extends Base = Base,
    MessageType = unknown
>(
    value : Type
) : Simple<Base, Type, Validatable<Base, string>> {

    return new Equal(value, EqualMessage)

}
