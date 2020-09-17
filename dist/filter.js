export default class Filter {
    constructor(validator, filter) {
        this.validator = validator;
        this.filter = filter;
    }
    validate(value) {
        let validatable = this.validator.validate(value);
        return this.filter(validatable, value);
    }
}
//# sourceMappingURL=filter.js.map