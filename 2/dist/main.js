function cityTaxes(name, population, treasury) {
    return {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes: function () {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth: function (percentage) {
            const growth = Math.floor((percentage / 100) * this.population);
            this.population += growth;
        },
        applyRecession: function (percentage) {
            const decrease = Math.floor((percentage / 100) * this.treasury);
            this.treasury -= decrease;
        }
    };
}
const city = cityTaxes('Tortuga', 7000, 15000);
console.log(city);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
city.applyRecession(10.10);
console.log(city.treasury);
