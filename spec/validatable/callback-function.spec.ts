import CallbackFunction from "../../dist/validatable/callback-function";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";


it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

function TestMessage (value : Validatable & Value) : string {
    return 'type:' + typeof value.value + ', valid:' + (value.valid ? 'true' : 'false')
}

describe('compiler compatibility', function () {

    describe('guard', function () {

        let wrapper = CallbackFunction({}, (v:unknown) : v is string => true, TestMessage);

        if(wrapper.valid) {

            let string : string = wrapper.value;
            let valid : boolean = wrapper.valid;
            let message : string = wrapper.message;

        } else {

            // @ts-ignore
            let string : string = wrapper.value;
            let valid : boolean = wrapper.valid;
            let message : string = wrapper.message;

        }

    });

    describe('validate', function () {

        let v = 12;
        let wrapper = CallbackFunction(v, (v: unknown) : boolean => true, TestMessage);

        if(wrapper.valid) {

            let string : number = wrapper.value;
            let valid : boolean = wrapper.valid;
            let message : string = wrapper.message;

        } else {

            // @ts-ignore
            let string : number = wrapper.value;
            let valid : boolean = wrapper.valid;
            let message : string = wrapper.message;

        }

    });

});

describe('construct', function () {

    it("data", () => {

        let wrapper = CallbackFunction({}, (v)=>typeof v === "object", TestMessage);

        expect(wrapper.valid).toBeTrue()
        expect(wrapper.value).toEqual({})
        expect(wrapper.message).toBe('type:object, valid:true')
    });

});


describe('set', function () {

    it("data", () => {

        let wrapper = CallbackFunction('str', (v)=>typeof v === "object", TestMessage);

        expect(wrapper.valid).toBeFalse()
        expect(wrapper.value).toBe('str')
        expect(wrapper.message).toBe('type:string, valid:false')
    });

});
