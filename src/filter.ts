import Validator from "./validator";
import Parameter from "./parameter/parameter";
import ValidatorValidatable from "./validatable/validatable";
import Fn from "@dikac/t-function/function";
import Validatable from "@dikac/t-validatable/validatable";


export default class Filter<
    Container extends Validator,
    Filtered extends Validatable
> implements Validator<Parameter<Container>, Filtered> {

    constructor(
        public subject : Container,
        public filter : Fn<[ValidatorValidatable<Container>, Parameter<Container>], Filtered>
    ){

    }

    validate(value : Parameter<Container>) : Filtered {

        let validatable : ValidatorValidatable<Container> = <ValidatorValidatable<Container>> this.subject.validate(value);
        
        return this.filter(validatable, value);
    }
}

