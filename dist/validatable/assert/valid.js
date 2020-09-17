import ThrowableValid from "../throwable/valid";
/**
 * Throw exception if given value is not {@link ValidatableInterface} type
 */
export default function Valid(value, error = ThrowableValid) {
    if (!value.valid) {
        throw error(value);
    }
}
//# sourceMappingURL=valid.js.map