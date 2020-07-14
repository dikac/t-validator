import Validator from "./validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordObject from "@dikac/t-object/record/recursive/record";
import Validate from "./record/recursive/validate";
import And from "@dikac/t-validatable/record/recursive/boolean/and";
import Value from "@dikac/t-value/value";
import RecursiveInferReturn from "./record/recursive/infer/return";
import RecursiveInferArgument from "./record/recursive/infer/argument";

export default class Record<
    Container extends RecordObject<PropertyKey, Validator<unknown>>
    > implements Validator<
    RecursiveInferArgument<Container>,
    Value<RecursiveInferReturn<Container>> & Validatable
    >
{

    constructor(
        public validators : Container
    ) {

        this.guardProperty(validators);
    }

    protected guardProperty(object : object) {

        if('valid' in object) {

            throw new Error(`property "valid" is reserved`);
        }
    }

    validate(value: RecursiveInferArgument<Container>) : Value<RecursiveInferReturn<Container>> & Validatable {

        let results : RecursiveInferReturn<Container> = Validate(this.validators, value);

        return  {
            value : results,
            // @ts-ignore
            valid : And(results)
        };

    }
}



