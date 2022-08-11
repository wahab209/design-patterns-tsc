import {Dish} from "./dish";
import {MainDish} from "./wrapper-functions/main-dish";

@MainDish
export class Eba implements Dish {
    constructor(quantity: number) {
        this.quantity = quantity;
    }
    quantity: number;

    getCost(): number {
        return 0;
    }

    getDescription(): string {
        return "Eba";
    }
}