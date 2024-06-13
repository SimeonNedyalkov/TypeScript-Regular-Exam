export class Drink{
    public name:string;
    public price:number;
    public volume:number;
    constructor(n:string,p:number,v:number){
        this.name = n
        this.price = p
        this.volume = v
    } 
    toString(){
        return `Name: ${this.name}, Price: ${this.price}, Volume ${this.volume} ml`
    }
}