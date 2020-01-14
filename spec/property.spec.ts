import Chain from "../dist/chain";
import Property from "../dist/property";
import StringType from "./string-type";
import ObjectType from "./object-type";
import Type from "../dist/type";
import {Validators} from "../dist/property";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("chain validator single case", function() {

    interface C {
        name : string;
        address : string;
    }

    let validator : Validators<C, {name:string, address:string}> = {
        name : new Type((data) => new StringType(data)),
        address : new Type((data) => new StringType(data)),
    };


    let property = new Property(validator);

    let validatable = property.validate({
        name : 'name',
        address : 'address',
    });

   // validatable.message.

    let type = new Chain([
        new Type((data) => new StringType(data)),
        new Type((data) => new StringType(data)),
    ]);

    // it(`validate integer`, () => {
    //
    //     let result = type.validate(1);
    //
    //     expect(result.valid).toBe(false);
    //     expect(result.message).toEqual(['false','false']);
    //
    //     try {
    //         let data = result.value;
    //         fail('accessing invalid data should throw exception')
    //     } catch (e) {
    //         expect(e instanceof Error).toBe(true);
    //     }
    // });
    //
    // it(`validate string`, () => {
    //
    //     let result = type.validate('hello world');
    //
    //     expect(result.valid).toBe(true);
    //     expect(result.value).toBe('hello world');
    //     expect(result.message).toEqual(['true','true']);
    //
    // });
});

//
// describe("chain validator multi case", function() {
//
//     let type = new Chain([
//         new Type((data) => new StringType(data)),
//         new Type((data) => new ObjectType(data)),
//     ]);
//
//     it(`validate integer`, () => {
//
//         let result = type.validate(1);
//
//         expect(result.valid).toBe(false);
//         expect(result.message).toEqual(['false','false']);
//
//         try {
//             let data = result.value;
//             fail('accessing invalid data should throw exception')
//         } catch (e) {
//             expect(e instanceof Error).toBe(true);
//         }
//     });
//
//     it(`validate string`, () => {
//
//         let result = type.validate('hello world');
//
//         expect(result.valid).toBe(false);
//
//         try {
//             let data = result.value;
//             fail('accessing invalid data should throw exception')
//         } catch (e) {
//             expect(e instanceof Error).toBe(true);
//         }
//
//         expect(result.message).toEqual(['false']);
//
//     });
// });




