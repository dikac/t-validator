import Type from "../../dist/boolean/validator";
import Validatable from "@dikac/t-validatable/validatable";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

describe("valid", function() {


    it("class", () =>{

        let data = {validate:(val) => {return {valid:true}}};
        expect(Type(data)).toBeTrue()

        if(Type(data)) {

            let type : Validatable<boolean> = data.validate(1); // compiler pass
        }
    });

    it("object", () => {

        let data = {validate:(val) => {return {valid:true}}};
        expect(Type(data)).toBeTrue();

        if(Type(data)) {

            let type : Validatable<boolean> = data.validate(1); // compiler pass
        }
    });

});

