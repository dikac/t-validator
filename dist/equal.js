import ValidatableEqual from "./validatable/equal";
/**
 * {@template Base} type which can be handled by implmentation
 * {@template Type} valid value type
 */
export default class Equal {
    constructor(value, message) {
        this.value = value;
        this.message = message;
    }
    validate(value) {
        return ValidatableEqual(value, this.value, this.message);
    }
}
//# sourceMappingURL=equal.js.map