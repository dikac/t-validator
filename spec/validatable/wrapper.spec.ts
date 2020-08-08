import Wrapper from "../../dist/validatable/readonly-wrapper";
import WrapperMerge from "../../dist/validatable/readonly-merge";
import Validatable from "@dikac/t-validatable/validatable";

it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe('construct', function () {

    it("data", () => {

        let standard = new WrapperMerge(
            {value:1},
            {message:'message'},
            {valid:true},
        );

        let wrapper = new Wrapper(standard);

        expect(wrapper.valid).toBeTrue()
        expect(wrapper.value).toBe(1)
        expect(wrapper.message).toBe('message')
    });

});


describe('set', function () {

    it("data", () => {

        let standard = new WrapperMerge(
            {value:3},
            {message:'message 2'},
            <Validatable<boolean>>{valid:false},
        );

        let wrapper = new Wrapper(standard);

        expect(wrapper.valid).toBeFalse()
        expect(wrapper.value).toBe(3)
        expect(wrapper.message).toBe('message 2')
    });

});
