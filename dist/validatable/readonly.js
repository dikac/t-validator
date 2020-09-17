export default function Readonly(value, valid, message) {
    return {
        get value() {
            return value;
        },
        get valid() {
            return valid;
        },
        get message() {
            return message;
        }
    };
}
//# sourceMappingURL=readonly.js.map