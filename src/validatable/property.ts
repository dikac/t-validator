import Validatable from "@dikac/t-validatable/validatable";
import Immutable from "@dikac/t-value/immutable";
import MessageInterface from "@dikac/t-message/message";

export default class Property<
    Value extends {[Key in keyof Value] : any},
    Msg extends {[Key in keyof Value] : any}
> {

    constructor(
        private validatables : {[Key in keyof Value] : Validatable & Immutable<Value> & MessageInterface<Msg>}
    ) {

    }


    get valid() : boolean {

        for (let validator in this.validatables) {

            if(!this.validatables[validator].valid) {

                return false;
            }
        }

        return true;
    }

    get message() : Msg {

        let object : {[key : string] : any} = {};

        for (let validator in this.validatables) {

            object[validator] = this.validatables[validator].message
        }

        return <Msg> object;
    }

    get value() : Value {

        let object : {[key : string] : any} = {};

        for (let validator in this.validatables) {

            object[validator] = this.validatables[validator].value
        }

        return <Value> object;
    }


}

