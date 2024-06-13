import { Drink } from "./Drink"

export class VendingMachine{
    private buttonCapacity : number
    private drinks: Drink[]
    constructor(bC:number){
        this.buttonCapacity = bC
        this.drinks = []
    }
    addDrink(drink:Drink) {
        if(this.buttonCapacity> this.drinks.length){
            return this.drinks.push(drink)
        }
        
    }
    removeDrink(name: string) {
        const index = this.drinks.findIndex(drink => drink.name === name);
        if (index !== -1) {
            this.drinks.splice(index, 1);
            return true;
        }
        return false;
    } 

    getLongest() {
        const drinksCopy = [...this.drinks];
        const sorted = drinksCopy.sort((a, b) => b.volume - a.volume);
        return sorted[0].toString();
    } 
    getCheapest(){
        const drinksCopy = [...this.drinks];
        const sorted = drinksCopy.sort((a, b) => a.price - b.price);
        return sorted[0].toString();
    } 
    buyDrink(name: string) {
        for(let i of this.drinks){
            if(i.name == name){
                return i.toString()
            }
        }
    } 
    getCount():number {
        return this.drinks.length
    } 
    report(){
        let str:string = `Drinks available: \n`
        for(let i of this.drinks){
            str += i + '\n'
        }
        return str
    }
}