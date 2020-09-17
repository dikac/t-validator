import Callback from "./callback";
export default function CallbackFunctionObject(object) {
    return new Callback(object.value, object.validation, object.message);
}
//# sourceMappingURL=callback-function-object.js.map