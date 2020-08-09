import Simple from "../../simple";

type Infer<Type> = Type extends Simple<any, infer As> ? As : never;

export default Infer;
