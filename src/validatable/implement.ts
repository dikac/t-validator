import InstanceInterface from "./instance";
import Replace from "./replace";

type Implement<
    Type,
    Argument,
    Overload extends boolean,
    Extend extends boolean,
    Instance extends InstanceInterface
> =
    Replace<Argument, Extend, Instance> |
    Replace<Type, Extend, Instance> |
    Replace<Argument, Overload, Instance>
;

export default Implement;
