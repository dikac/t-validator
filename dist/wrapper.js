/**
 * wrapper for {@link Simple}
 */
export default class Wrapper {
    constructor(validator) {
        this.validator = validator;
    }
    validate(value) {
        return this.validator.validate(value);
    }
}
//# sourceMappingURL=wrapper.js.map