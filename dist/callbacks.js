import ValidationCallback from "./validatable/callback-function";
/**
 * create {@see Validator} from multiple callback
 */
export default class Callbacks {
    /**
     * @param validation
     * handle {@see Validatable.valid} call
     *
     * @param message
     * handle {@see Validatable.message} call
     */
    constructor(validation, message) {
        this.validation = validation;
        this.message = message;
    }
    validate(value) {
        return ValidationCallback(value, this.validation, this.message);
    }
}
//# sourceMappingURL=callbacks.js.map