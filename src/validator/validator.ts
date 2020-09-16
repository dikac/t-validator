import ValidatorInterface from "../validator";

/**
 * Container for {@link ValidatorInterface}
 */
export default interface Validators<ValidatorType extends ValidatorInterface> {

    validator :  ValidatorType,
}
