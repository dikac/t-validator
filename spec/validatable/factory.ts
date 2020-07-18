export default class Factory  {

    constructor(
        readonly value : unknown,
        private type : string
    ) {
    }


    get valid () : boolean {

        return typeof this.value === this.type;
    }
}
