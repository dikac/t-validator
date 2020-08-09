import Validatable from "./validatable/validatable";
import Validator from "./validator";

/**
 * simple implementation of {@see Validator}
 */

type Simple<
    Base = unknown,
    Type extends Base = Base,
    ValidatableT extends Validatable<Base> = Validatable<Base>
> = Validator<Base, Type, false, true, ValidatableT>;

export default Simple;
