import Record from "@dikac/t-object/record/recursive/record";
import Validator from "../../../validator";
import InferReturn from "../../../infer/return";
export declare type Return<Schema extends Record<PropertyKey, Validator<unknown>>> = {
    [Key in keyof Schema]: Schema[Key] extends Record<PropertyKey, Validator<any>> ? Return<Schema[Key]> : InferReturn<Schema[Key]>;
};
export default Return;
