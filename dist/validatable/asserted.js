import ReadonlyWrapper from "./readonly-wrapper";
import ThrowableValid from "./throwable/valid";
/**
 * @inheritDoc {@link ReadonlyWrapper}
 *
 * throw exception when {@link Validatable} is in valid (false) when
 * accessing value {@link Value}
 */
export default class Asserted extends ReadonlyWrapper {
    /**
     * @param subject
     * @param error
     */
    constructor(subject, error = ThrowableValid) {
        super(subject);
        this.error = error;
    }
    get value() {
        if (!this.valid) {
            throw this.error(this.subject);
        }
        return this.subject.value;
    }
}
//# sourceMappingURL=asserted.js.map