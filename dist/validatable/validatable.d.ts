import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import ValidatableInterface from "@dikac/t-validatable/validatable";
declare type Validatable<Base = unknown, MessageType = unknown, Boolean extends boolean = boolean> = Message<MessageType> & Value<Base> & ValidatableInterface<Boolean>;
export default Validatable;
