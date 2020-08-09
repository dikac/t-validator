import Instance from "./instance";
import Validatable from "./validatable";

type Simple<
    Base = unknown,
    Argument extends Base = Base,
    Type extends Base = Base,
    InstanceT extends Instance<Base> = Instance<Base>
> = Validatable<
    Base,
    Argument,
    Type,
    false,
    true,
    InstanceT
>;

export default Simple;
