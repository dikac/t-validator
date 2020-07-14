import Record from "@dikac/t-object/record/recursive/record";
import Validator from "../../../validator";
import InferArgument from "../../../infer/argument";
declare type Argument<Schema extends Record<PropertyKey, Validator<unknown>>> = {
    [Key in keyof Schema]: Schema[Key] extends Record<PropertyKey, Validator<unknown>> ? Argument<Schema[Key]> : InferArgument<Schema[Key]>;
};
export default Argument;
