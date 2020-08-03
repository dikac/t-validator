import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
declare type Instance<Base, MessageT = unknown, Boolean extends boolean = boolean> = Message<MessageT> & Value<Base> & Validatable<Boolean>;
export default Instance;
