import ReplaceValue from "@dikac/t-value/value/replace";
import ValidatableReplace from "@dikac/t-validatable/boolean/replace";
import Validatable from "./validatable";
declare type Replace<ValueT, Boolean extends boolean, ValidatableT extends Validatable> = ReplaceValue<ValidatableReplace<ValidatableT, Boolean>, ValueT>;
export default Replace;
