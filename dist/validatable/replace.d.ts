import ReplaceValue from "@dikac/t-value/value/replace";
import ValidatableReplace from "@dikac/t-validatable/boolean/replace";
import Validatable from "./validatable";
declare type Replace<ValueType, Boolean extends boolean, ValidatableType extends Validatable> = ReplaceValue<ValidatableReplace<ValidatableType, Boolean>, ValueType>;
export default Replace;
