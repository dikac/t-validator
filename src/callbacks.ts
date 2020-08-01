import Validator from "./validator";
import MessageValue from "@dikac/t-message/message/message";
import Return from "./return/return";
import Memoize from "@dikac/t-function/memoize";
import Instance from "./parameter/instance/instance";

export default class Callbacks<
    Base = unknown,
    Type extends Base = Base,
    Extent extends Instance<Base> = Instance<Base>
    > implements Validator<Base, Type, Extent>
{

    constructor(
        public message : <Argument extends Base>(argument: Omit<Return<Base, Argument, Type, Extent>, 'message'>) => MessageValue<Extent>,
        public validation : <Argument extends Base>(argument:Base) => boolean,
    ) {

    }

    validate<Argument extends Base>(value: Argument) : Return<Base, Argument, Type, Extent> {

        const valid = this.validation(value);

        const partial = <Omit<Return<Base, Argument, Type, Extent>, 'message'>> {
            get valid ()  {
                return valid
            },
            get value ()  {
                return value
            }
        }

        let message = Memoize(this.message, partial);

        let result = Object.defineProperty(partial, 'message', {
            get : message
        });

        return result;
    }
}
