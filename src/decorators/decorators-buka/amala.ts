import {MainDish} from "./wrappers/main-dish";

export class Amala extends MainDish {

    constructor(quantity: number) {
        super(quantity);
        if(!quantity || quantity < 1) throw Error("Specify the number of Amala wraps");
        this.className = Amala.name;
    }

    getCost(): number {
        return 100 * this.quantity;
    }

    className: string;

}