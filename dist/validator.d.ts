import Validatable from '@dikac/t-validatable/validatable';
export default interface Validator<Value, Result extends Validatable = Validatable> {
    validate(value: Value): Result;
}
