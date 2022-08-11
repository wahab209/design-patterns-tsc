import {Dish} from "../dish";

export abstract class Refreshment implements Dish {
    quantity: number;
    dish: Dish;
    abstract className: string;

    abstract getCost(): number;
    protected constructor(dish: Dish, quantity: number) {
        this.dish = dish;
        this.quantity = quantity;
        this.getDescription();
    }

    getDescription(): string {
        const desc = this.dish.getDescription();
        if(!desc) throw new Error("Order a main dish before adding a refreshment")
        if(desc.includes(this.className)) throw new Error(`Order your ${this.className} at once`)
        if(this.quantity > 1) {
            return desc + ", " + this.quantity + " bottles of " + this.className;
        } else {
            return desc + ", " + this.quantity + " bottle of " + this.className;
        }
    }
}