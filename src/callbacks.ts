import Validator from "./validator";
import Message from "@dikac/t-message/message";
import MessageValue from "@dikac/t-message/message/message";
import Construct from "./return/construct";
import Memoize from "@dikac/t-function/memoize";

export default class Callbacks<
    Base = unknown,
    Type extends Base = Base,
    Extent extends Message = Message
    > implements Validator<Base, Type, Extent>
{

    constructor(
        public message : <Argument extends Base>(argument: Omit<Construct<Base, Argument, Type, Extent>, 'message'>) => MessageValue<Extent>,
        public validation : <Argument extends Base>(argument:Base) => boolean,
    ) {

    }

    validate<Argument extends Base>(value: Argument) : Readonly<Construct<Base, Argument, Type, Extent>> {

        const valid = this.validation(value);

        const result = <Omit<Construct<Base, Argument, Type, Extent>, 'message'>> {
            get valid ()  {
                return valid
            },
            get value ()  {
                return value
            }
        }

        let message = Memoize(this.message, result);

        Object.defineProperty(result, 'message', {
            get : message
        });

        return <Readonly<Construct<Base, Argument, Type, Extent>>> result;
    }
}
