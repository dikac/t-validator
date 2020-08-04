import ValidatorInterface from "../validator";
/**
 * Container for {@link ValidatorInterface}
 */
export default interface Validators<ValidatorT extends ValidatorInterface> {
    validator: ValidatorT;
}
