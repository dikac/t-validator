import Validatable from "./validatable";
import Ambiguous from "./ambiguous";

type Simple<
    Base = unknown,
    Argument extends Base = Base,
    Type extends Base = Base,
    ValidatableType extends Validatable<Base> = Validatable<Base>
> = Ambiguous<
    Base,
    Argument,
    Type,
    false,
    true,
    ValidatableType
>;

export default Simple;
