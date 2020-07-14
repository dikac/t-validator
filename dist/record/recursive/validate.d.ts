import Record from "@dikac/t-object/record/recursive/record";
import RecursiveInferArgument from "./infer/argument";
import RecursiveInferReturn from "./infer/return";
import Validator from "../../validator";
export default function validate<Validators extends Record<PropertyKey, Validator<unknown>>>(validators: Validators, values: RecursiveInferArgument<Validators>): RecursiveInferReturn<Validators>;
