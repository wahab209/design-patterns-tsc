import {Dish} from "./dish";
import {Extras} from "./wrappers/extras";

export class Beef extends Extras {
    className: string = Beef.name;

    constructor(dish: Dish, quantity: number) {
        super(dish, quantity);
    }

    getCost(): number {
        return this.dish.getCost() + (this.quantity * 200);
    }
}