"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drink = void 0;
class Drink {
    name;
    price;
    volume;
    constructor(n, p, v) {
        this.name = n;
        this.price = p;
        this.volume = v;
    }
    toString() {
        return `Name: ${this.name}, Price: ${this.price}, Volume ${this.volume} ml`;
    }
}
exports.Drink = Drink;
