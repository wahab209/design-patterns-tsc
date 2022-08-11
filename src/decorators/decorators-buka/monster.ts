import {Refreshment} from "./wrappers/refreshment";
import {Dish} from "./dish";

export class Monster extends Refreshment {
    className = Monster.name;

    constructor(dish: Dish, quantity: number) {
        super(dish, quantity);
    }

    getCost(): number {
        return this.dish.getCost() + (this.quantity * 800);
    }
}