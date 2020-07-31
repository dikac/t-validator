import Message from "@dikac/t-message/message";
import Construct from "./return/construct";

export default interface Validator<
    Base = unknown,
    Type extends Base = Base,
    Extend extends Message = Message
>  {

    validate<Argument extends Base>(value : Argument) : Construct<Base, Argument, Type, Extend>;
}
