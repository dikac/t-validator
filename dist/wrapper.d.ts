import Validator from "./validator";
import Parameter from "./parameter/parameter";
import Validatable from "./validatable/validatable";
/**
 * wrapper for {@link Validator}
 */
export default class Wrapper<Container extends Validator<unknown>> implements Validator<Parameter<Container>, Validatable<Container>> {
    subject: Container;
    constructor(subject: Container);
    validate(value: Parameter<Container>): Validatable<Container>;
}
