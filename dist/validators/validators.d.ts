import Validator from "../validator";
import Validatable from "@dikac/t-validatable/validatable";
import Immutable from "@dikac/t-value/immutable";
import MessageInterface from "@dikac/t-message/message";
export default interface Validators<Value extends {
    [Key in keyof Value]: Value[Key];
}, Msg extends {
    [Key in keyof Value]: Msg[Key];
}> {
    validators: {
        [K in keyof Value]: Validator<Value[K], Validatable & Immutable<Value[K]> & MessageInterface<Msg[K]>>;
    };
}
