import Simple from "../dist/simple";
import Validator from "../dist/validator";
import Validatable from "../dist/validatable/validatable";
import BaseInfer from "../dist/base/infer";
import TypeInfer from "../dist/type/infer";
import ValidatorInfer from "../dist/validatable/infer";
import ExtendInfer from "../dist/match/infer";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


describe('compiler compatibility', () => {

    let simple : Simple<unknown, number, Validatable<unknown, string>>;
    let validator : Validator<unknown, number, false, true, Validatable<number, string>>;


    let base : BaseInfer<Simple<unknown, number, Validatable<unknown, string>>> = <unknown> 1;
    let type : TypeInfer<Simple<unknown, number, Validatable<unknown, string>>> = 1;

    let overload1 : ValidatorInfer<Simple<unknown, number, Validatable<unknown, string>>> = {value:1, valid:true, message:'message'};
    let overload2 : ValidatorInfer<Simple<unknown, number, Validatable<unknown, string>>> = {value:<unknown>1, valid:false, message:'message'};

    let extend1 : ExtendInfer<Simple<unknown, number, Validatable<unknown, string>>> = true;

    let extend2 : ExtendInfer<Simple<unknown, number, Validatable<unknown, string>>> = true;

});
