import {Amala} from "./amala";
import {Beef} from "./beef";
import {Goat} from "./goat";
import {Monster} from "./monster";

function placeOrder() {
    let dish = new Amala(2);
    dish = new Beef(dish, 1);
    dish = new Goat(dish, 1);
    dish = new Monster(dish, 1)
    console.log(dish.getCost())
    console.log(dish.getDescription())
}

placeOrder();