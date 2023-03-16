let car1 = {
    brand: "Chevrolet",
    name: "Camaro",
    year: 1966
  };
  let car2 = car1;
  console.log(car2.brand);
  car2.topSpeed = 220;
  console.log(car1.topSpeed);
