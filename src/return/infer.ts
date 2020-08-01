import Validator from "../validator";
import Return from "./return";

type Infer<Type> = Type extends Validator<
    infer Base,
    infer Type,
    infer Instance
> ? Return<Base, Base, Type, Instance> : never;

export default Infer;
