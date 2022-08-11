import {Dish} from "../dish";

export function MainDish<T extends { new (...args: any[]): Dish }>(constructor: T) {
    return class extends constructor {
        getDescription = () => {
            return this.quantity + " wraps of " + constructor.name
        }
    };
}
