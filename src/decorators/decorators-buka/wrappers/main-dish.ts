import {Dish} from "../dish";

export abstract class MainDish implements Dish{
    quantity: number;
    abstract className: string;
    protected constructor(quantity: number) {
        this.quantity = quantity;
    }
    abstract getCost(): number;
    getDescription(): string{
        return this.quantity + " wraps of " + this.className;
    }
}