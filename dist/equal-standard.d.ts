import Simple from "./simple";
import Validatable from "./validatable/validatable";
export default function EqualStandard<Base = unknown, Type extends Base = Base, MessageType = unknown>(value: Type): Simple<Base, Type, Validatable<Base, string>>;
