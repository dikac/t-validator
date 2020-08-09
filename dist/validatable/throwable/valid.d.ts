import Function from "@dikac/t-function/function";
import Validatable from "../validatable";
export default function Valid(object: Validatable, throwable?: Function<[Validatable], Error>): Error;
