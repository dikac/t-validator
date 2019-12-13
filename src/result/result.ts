import Validatable from "t-validatable/validatable";
import Message from "t-message/message";
import Immutable from "t-value/immutable";

export default abstract class Result<Type> implements Validatable, Message, Immutable<Type> {

    constructor(
        readonly data : Type,
        readonly valid : boolean = false
    ) {
    }

    get message() : string {

        return this.getMessage(this.data, this.valid);
    }

    protected abstract getMessage(data : any, valid : boolean) : string;

    get value() : Type {

        if(this.valid) {

            return this.data;

        } else {

            throw new Error(this.message)
        }
    }

}