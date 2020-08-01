import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
declare type Instance<Super, MessageT = unknown> = Message<MessageT> & Value<Super> & Validatable;
export default Instance;
