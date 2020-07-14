import Record from "@dikac/t-object/record/recursive/record";
import Map from "@dikac/t-object/record/recursive/map";
import Validator from "../../validator";
import ToValue from "../to-value";
import ToValidatable from "../to-validatable";
import GuardValidator from "../../boolean/validator";
import Validatable from "@dikac/t-validatable/validatable";
import TypeObject from "@dikac/t-object/boolean/type";
import PropertyActual from "@dikac/t-object/message/string/property-actual";
import Argument from "../../infer/argument";
import Value from "@dikac/t-object/record/infer/value";
import Return from "../../infer/return";

export default function validate<
    Validators extends Record<keyof any, any>
>(
    validators : Validators,
    values : Map<Argument<Value<Validators>>, Value<Validators>, keyof Validators, Validators>
) : Map<Return<Value<Validators>>, Value<Validators>, keyof Validators, Validators> {

    let object : Map<Return<Value<Validators>>, Value<Validators>, keyof Validators, Validators> = <Map<Return<Value<Validators>>, Value<Validators>, keyof Validators, Validators>>{};

    for(let property in validators) {

        const validator = validators[property];
        const value = values[property];

        if(Validator(validator)) {

            object[property] = validator.validate(value);
            continue;
        }

        if(TypeObject(validator) && TypeObject(value)) {

            // @ts-ignore
            object[property] = validate(validator,  value);
            continue;
        }

        throw new Error(PropertyActual(property, 'validator or record of validator', validator + ''));
    }

    return  object;
}
