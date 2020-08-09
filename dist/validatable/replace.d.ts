import ReplaceValue from "@dikac/t-value/value/replace";
import ValidatableReplace from "@dikac/t-validatable/boolean/replace";
import Instance from "./instance";
declare type Replace<ValueT, Boolean extends boolean, InstanceT extends Instance> = ReplaceValue<ValidatableReplace<InstanceT, Boolean>, ValueT>;
export default Replace;
