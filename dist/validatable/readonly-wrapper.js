/**
 * read only wrapper for {@link Message}, {@link Value} and {@link ValidatableInterface}
 */
export default class ReadonlyWrapper {
    constructor(subject) {
        this.subject = subject;
    }
    get valid() {
        return this.subject.valid;
    }
    get message() {
        return this.subject.message;
    }
    get value() {
        return this.subject.value;
    }
}
//# sourceMappingURL=readonly-wrapper.js.map