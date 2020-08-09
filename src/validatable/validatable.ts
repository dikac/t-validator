import ReplaceValue from "@dikac/t-value/value/replace";
import InstanceInterface from "./instance";
import ValidatableReplace from "@dikac/t-validatable/boolean/replace";




type Validatable<
    Base = unknown,
    Argument extends Base = Base,
    Type extends Base = Base,
    Overload extends boolean = boolean,
    Extend extends boolean = boolean,
    Instance extends InstanceInterface<Base> = InstanceInterface<Base>
> =

     ReplaceValue<ValidatableReplace<Instance, Extend>, Argument extends Type ? Argument : Type> |
     ReplaceValue<ValidatableReplace<Instance, Overload>, Argument>
      ;
    //(ReplaceValue<ValidatableReplace<Instance, Extend>, Type>) |
    // (ReplaceValue<ValidatableReplace<Instance, Overload>, Argument>)
    //;


    //(ReplaceValue<ValidatableReplace<Instance, Overload>, Argument>) |
    //( Argument extends Type ?
    //    ReplaceValue<ValidatableReplace<Instance, Extend>, Argument> :
    //    ReplaceValue<ValidatableReplace<Instance, Extend>, Type>
    //);


// type Validatable2<
//     Base = unknown,
//     Argument extends Base = Base,
//     Type extends Base = Base,
//     Overload extends boolean = boolean,
//     Extend extends boolean = boolean,
//     Instance extends InstanceInterface<Base> = InstanceInterface<Base>
// > =
//
//     Argument extends Type ?  ReplaceValue<Validatable<Base, Argument, Type, Overload, Extend, Instance>, Argument> : Validatable<Base, Argument, Type, Overload, Extend, Instance>;


export default Validatable;
