import Validator from "./validator";
import Return from "./return/return";
import Message from "@dikac/t-message/message";
import Construct from "./return/construct";
export default class Filter<Base = unknown, Type extends Base = Base, Extent extends Message = Message, Container extends Validator = Validator> implements Validator<Base, Type, Extent> {
    subject: Container;
    filter: <Argument extends Base>(result: Return<Container>, argument: Base) => Construct<Base, Argument, Type, Extent>;
    constructor(subject: Container, filter: <Argument extends Base>(result: Return<Container>, argument: Base) => Construct<Base, Argument, Type, Extent>);
    validate<Argument extends Base>(value: Argument): Construct<Base, Argument, Type, Extent>;
}
