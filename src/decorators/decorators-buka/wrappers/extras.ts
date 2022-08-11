import {Dish} from "../dish";

export abstract class Extras implements Dish {
    quantity: number;
    dish: Dish;
    abstract className: string;

    protected constructor(dish: Dish, quantity: number) {
        this.quantity = quantity;
        this.dish = dish;
        this.getDescription();
    }


    getDescription(): string {
        const desc = this.dish.getDescription();
        if(!desc) throw new Error("Order a main dish before adding an extra")
        if(desc.includes(this.className)) throw new Error(`Order your ${this.className} at once`)
        if(this.quantity > 1) {
            return desc + ", " + this.quantity + " pieces of " + this.className;
        } else {
            return desc + ", " + this.quantity + " piece of " + this.className;
        }
    }

    abstract getCost(): number;

}