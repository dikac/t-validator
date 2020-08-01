import Validator from "./validator";
import Infer from "./return/infer";
import Return from "./return/return";
import Instance from "./parameter/instance/instance";


export default class Filter<
    Base = unknown,
    Type extends Base = Base,
    Extent extends Instance<Base> = Instance<Base>,
    Container extends Validator = Validator,
> implements Validator<Base, Type, Extent> {

    constructor(
        public subject : Container,
        public filter : <Argument extends Base>(result:Infer<Container>, argument:Base) => Return<Base, Argument, Type, Extent>
    ){

    }

    validate<Argument extends Base>(value : Argument) : Return<Base, Argument, Type, Extent> {

        let validatable : Infer<Container> = <Infer<Container>> this.subject.validate(value);

        return this.filter(validatable, value);
    }
}

