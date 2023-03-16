function makeCar(model, color, topSpeed) {
    return {
      model: model,
      color: color,
      topSpeed: topSpeed,
      manufacturer: {
        name: "Dodge",
        country: "USA",
      }
    };
  }        
  
  console.log(makeCar("Viper", "blue", 290));