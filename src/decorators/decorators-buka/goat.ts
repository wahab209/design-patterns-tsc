import {Dish} from "./dish";
import {Extras} from "./wrappers/extras";

export class Goat extends Extras {
    className: string = Goat.name;

    constructor(dish: Dish, quantity: number) {
        super(dish, quantity)
    }

    getCost(): number {
        return this.dish.getCost() + (this.quantity * 1000);
    }
}