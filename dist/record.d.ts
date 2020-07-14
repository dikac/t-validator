import Validator from "./validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordObject from "@dikac/t-object/record/recursive/record";
import Value from "@dikac/t-value/value";
import RecursiveInferReturn from "./record/recursive/infer/return";
import RecursiveInferArgument from "./record/recursive/infer/argument";
export default class Record<Container extends RecordObject<PropertyKey, Validator<unknown>>> implements Validator<RecursiveInferArgument<Container>, Value<RecursiveInferReturn<Container>> & Validatable> {
    validators: Container;
    constructor(validators: Container);
    protected guardProperty(object: object): void;
    validate(value: RecursiveInferArgument<Container>): Value<RecursiveInferReturn<Container>> & Validatable;
}
