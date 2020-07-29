import Validator from "./validator";
import Parameter from "./parameter/parameter";
import Return from "./return/return";
/**
 * wrapper for {@link Validator}
 */
export default class Wrapper<Container extends Validator> implements Validator<Parameter<Container>, Return<Container>> {
    subject: Container;
    constructor(subject: Container);
    validate(value: Parameter<Container>): Return<Container>;
}
