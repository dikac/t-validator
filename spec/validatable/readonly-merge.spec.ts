import WrapperMerge from "../../dist/validatable/readonly-merge";


it("enable console log", () => { spyOn(console, 'log').and.callThrough();});


describe('construct', function () {

    it("data", () => {

        let wrapper = new WrapperMerge(
            {value:1},
            {message:'message'},
            {valid:true},
        );

        expect(wrapper.valid).toBeTrue()
        expect(wrapper.value).toBe(1)
        expect(wrapper.message).toBe('message')
    });

});


describe('set', function () {

    it("data", () => {
        let value =  {value:1};
        let message = {message:'message'};
        let validatable =  {valid:true};
        let wrapper = new WrapperMerge(value, message, validatable);

        value.value = 3;
        validatable.valid = false;
        message.message = 'message 2';

        expect(wrapper.message).toBe('message 2')
        expect(wrapper.valid).toBeFalse()
        expect(wrapper.value).toBe(3)
    });

});
