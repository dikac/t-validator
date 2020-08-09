import Simple from "../../simple";
declare type Infer<Type> = Type extends Simple<any, infer As> ? As : never;
export default Infer;
