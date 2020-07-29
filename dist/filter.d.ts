import Validator from "./validator";
import Parameter from "./parameter/parameter";
import ValidatorValidatable from "./validatable/validatable";
import Fn from "@dikac/t-function/function";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
export default class Filter<Container extends Validator, Filtered extends Validatable & Message> implements Validator<Parameter<Container>, Filtered> {
    subject: Container;
    filter: Fn<[ValidatorValidatable<Container>, Parameter<Container>], Filtered>;
    constructor(subject: Container, filter: Fn<[ValidatorValidatable<Container>, Parameter<Container>], Filtered>);
    validate(value: Parameter<Container>): Filtered;
}
