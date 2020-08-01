import Message from "@dikac/t-message/message";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import { Object } from "ts-toolbelt";
declare type Return<Base = unknown, Argument extends Base = Base, Type extends Base = Base, Extent extends Message & Value<Base> & Validatable = Message & Value<Base> & Validatable> = (Object.Update<Object.Update<Extent, 'valid', true>, 'value', Type>) | (Object.Update<Object.Update<Extent, 'valid', false>, 'value', Argument>);
export default Return;
