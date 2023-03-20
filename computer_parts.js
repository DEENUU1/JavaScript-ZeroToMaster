var computer = {
    totalPrice: 0,
    type: "PC",
    parts: [
        {
            type: "obudowa",
            name: "czarna obudowa",
            price: 200
        },
        {
            type: "procesor",
            name: "amd gówno jebane się grzeje",
            price: 2000
        }
    ],

    calculatePrice: function() {
        let totalPrice = 0;
        for (let i = 0; i < this.parts.length; i++) {
            const part = this.parts[i];
            totalPrice += part.price;
        }

        this.totalPrice = totalPrice;

    }
}; 

computer.calculatePrice()
console.log(computer.totalPrice);
