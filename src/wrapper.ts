import Validator from "./validator";
import Base from "./parameter/base/base";
import Type from "./parameter/type/type";
import Extend from "./parameter/extend/extend";
import Construct from "./return/construct";

/**
 * wrapper for {@link Validator}
 */
export default class Wrapper<
    Container extends Validator
> implements Validator<Base<Container>, Type<Container>, Extend<Container>> {

    constructor(
        public subject : Container
    ){

    }

    validate<Argument extends Base<Container>>(value : Argument) : Construct<Base<Container>, Argument, Type<Container>, Extend<Container>> {

        return <Construct<Base<Container>, Argument, Type<Container>, Extend<Container>>> this.subject.validate(value);
    }
}

