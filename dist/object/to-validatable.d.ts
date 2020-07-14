import Record from "@dikac/t-object/record/recursive/record";
import Validator from "../validator";
export declare type ToValidatable<Schema extends Record<PropertyKey, Validator<unknown>>> = {
    [Key in keyof Schema]: Schema[Key] extends Record<PropertyKey, Validator<any>> ? ToValidatable<Schema[Key]> : (Schema[Key] extends Validator<any, infer U> ? U : never);
};
export default ToValidatable;
