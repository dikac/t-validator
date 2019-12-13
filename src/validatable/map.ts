import Validatable from "t-validatable/validatable";
import Message from "t-message/message";
import Immutable from "t-value/immutable";

export default class Map_<Type> implements Validatable, Message<Map<string, string>>, Immutable<Type> {

    readonly valids : Map<string,Validatable & Message<string>> = new Map<string,Validatable & Message<string>>();
    readonly invalids : Map<string,Validatable & Message<string>> = new Map<string,Validatable & Message<string>>();

    constructor(
        private data : Type,
        private results : Map<string,Validatable & Message<string>>
    ) {

        for (let [key, result] of results) {

            if(result.valid) {

                this.valids.set(key, result);

            } else {

                this.invalids.set(key, result);
            }
        }
    }

    get valid() : boolean {

        return this.invalids.size === 0;
    }

    get message() : Map<string, string> {

        let data = this.valid ? this.valids : this.invalids;

        let message = new Map<string, string>();

        for(let [key, validator] of data) {

            message.set(key, validator.message);
        }

        return message;
    }

    get value() : Type {

        if(this.valid) {

            return this.data;

        } else {

            throw new Error([...this.message.values()].join(', '))
        }
    }

}