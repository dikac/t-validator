import Validator from "./validator";
import Parameter from "./parameter/parameter";
import Validatable from "./validatable/validatable";

/**
 * wrapper for {@link Validator}
 */
export default class Wrapper<
    Container extends Validator<unknown>
> implements Validator<Parameter<Container>, Validatable<Container>> {

    constructor(
        public subject : Container
    ){

    }

    validate(value : Parameter<Container>) : Validatable<Container> {

        return <Validatable<Container>> this.subject.validate(value);
    }
}

