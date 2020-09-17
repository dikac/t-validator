import TypeFunction from "@dikac/t-function/boolean/function";
export default function Validator(value) {
    if (!TypeFunction(value.validate)) {
        return false;
    }
    return true;
}
//# sourceMappingURL=validator.js.map