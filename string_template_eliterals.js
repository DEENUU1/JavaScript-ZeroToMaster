function getUserDescription(name, city, country) {
    const firstSign = name[0];
    const nameLenght = name.length;
    const lastSign = name[nameLenght - 1];
    console.log(`${firstSign} ${nameLenght} ${lastSign}`)
  }

  getUserDescription("Kasia", "Kraków", "Polska");