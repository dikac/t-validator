import Simple from "../simple";
import ReplaceValue from "@dikac/t-value/value/replace";
import InferValue from "@dikac/t-value/value/infer";
import ValidatableReplace from "@dikac/t-validatable/boolean/replace";
import Instance from "./instance";

type Replace<ValueT, Boolean extends boolean, InstanceT extends Instance> = ReplaceValue<ValidatableReplace<InstanceT, Boolean>, ValueT>;

export default Replace;
