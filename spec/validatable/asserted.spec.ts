import IsObject from "@dikac/t-object/boolean/object";
import Asserted from "../../dist/validatable/asserted";
import Callback from "../../dist/validatable/callback";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

function TestMessage (value : Validatable & Value) {
    return 'type:' + typeof value.value + ', valid:' + (value.valid ? 'true' : 'false')
}

describe('invalid', function () {


    let subject = Callback(1, IsObject, TestMessage);
    let callback = new Asserted(subject);

    it("check value", () => {
        try {
            let data = callback.value;
            fail('exception should thrown')
        } catch (e) {
            expect(e).toBeInstanceOf(Error)
        }

    });

    it("check message", () => {

        expect(callback.message).toBe('type:number, valid:false')
    });

});


describe('valid', function () {

    let subject = Callback({}, IsObject, TestMessage);
    let callback = new Asserted(subject);

    it("check value", () => {
        expect(callback.valid).toBeTrue()
        expect(callback.value).toEqual({})
        expect(callback.message).toBe('type:object, valid:true')
    });
});


