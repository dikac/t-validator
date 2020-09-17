/**
 * adapt callback to {@see Validator}
 */
export default class Callback {
    /**
     * @param callback
     */
    constructor(callback) {
        this.callback = callback;
    }
    validate(value) {
        return this.callback(value);
    }
}
//# sourceMappingURL=callback.js.map