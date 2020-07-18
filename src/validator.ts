import Validatable from '@dikac/t-validatable/validatable';

export default interface Validator<Value = unknown, Result extends Validatable = Validatable>  {

    validate(value : Value) : Result;

}
