import Record from "@dikac/t-object/record/recursive/record";
import Validator from "../validator";
declare type ToValue<Schema extends Record<PropertyKey, Validator<unknown>>> = {
    [Key in keyof Schema]: Schema[Key] extends Record<PropertyKey, Validator<unknown>> ? ToValue<Schema[Key]> : (Schema[Key] extends Validator<infer U> ? U : never);
};
export default ToValue;
