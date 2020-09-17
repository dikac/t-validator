/**
 * merge {@link Value}, {@link Message} and {@link ValidatableInterface}
 */
export default class ReadonlyMerge {
    constructor(valueContainer, messageContainer, validatableContainer) {
        this.valueContainer = valueContainer;
        this.messageContainer = messageContainer;
        this.validatableContainer = validatableContainer;
    }
    get valid() {
        return this.validatableContainer.valid;
    }
    get value() {
        return this.valueContainer.value;
    }
    get message() {
        return this.messageContainer.message;
    }
}
//# sourceMappingURL=readonly-merge.js.map