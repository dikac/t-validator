import Validatable from '@dikac/t-validatable/validatable';
import Message from "@dikac/t-message/message";

export default interface Validator<
    Value = unknown,
    Result extends Validatable & Message = Validatable & Message
>  {

    validate(value : Value) : Result;

}
