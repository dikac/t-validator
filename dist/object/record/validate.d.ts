import Record from "@dikac/t-object/record/recursive/record";
import Map from "@dikac/t-object/record/recursive/map";
import Argument from "../../infer/argument";
import Value from "@dikac/t-object/record/infer/value";
import Return from "../../infer/return";
export default function validate<Validators extends Record<keyof any, any>>(validators: Validators, values: Map<Argument<Value<Validators>>, Value<Validators>, keyof Validators, Validators>): Map<Return<Value<Validators>>, Value<Validators>, keyof Validators, Validators>;
