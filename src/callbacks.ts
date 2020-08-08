import Simple from "./simple";
import SimpleReturn from "./validatable/simple";
import Memoize from "@dikac/t-function/memoize";
import Instance from "./validatable/instance";

export default class Callbacks<
    Base = unknown,
    Type extends Base = Base,
    MessageT = unknown,
    > implements Simple<Base, Type, Readonly<Instance<Base, MessageT>>>
{
    constructor(
        public message : <Argument extends Base>(argument: Omit<SimpleReturn<Base, Argument, Type, Readonly<Instance<Base, MessageT>>>, 'message'>) => MessageT,
        public validation : <Argument extends Base>(argument:Base) => boolean,
    ) {
    }

    validate<Argument extends Base>(value: Argument) : SimpleReturn<Base, Argument, Type, Readonly<Instance<Base, MessageT>>> {

        const valid = this.validation(value);

        const partial = <Omit<SimpleReturn<Base, Argument, Type, Readonly<Instance<Base, MessageT>>>, 'message'>> {
            get valid ()  {
                return valid
            },
            get value () : Argument|Type {
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
