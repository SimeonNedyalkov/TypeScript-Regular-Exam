function cityTaxes(name:string, population :number, treasury :number){
    return {
        name:name,
        population:population,
        treasury:treasury,
        taxRate:10,

        collectTaxes : function() : void{
            this.treasury += Math.floor(this.population * this.taxRate)
        },
        applyGrowth: function(percentage: number): void{
            const growth = Math.floor((percentage/100) * this.population)
            this.population += growth
        },
        applyRecession:function(percentage:number):void{
            const decrease = Math.floor((percentage/100) * this.treasury)
            this.treasury -=decrease
        } 
    }
}
const city =

cityTaxes('Tortuga',
7000,
15000);
console.log(city)
city.collectTaxes();

console.log(city.treasury);

city.applyGrowth(5);

console.log(city.population);
city.applyRecession(10)
console.log(city.treasury)