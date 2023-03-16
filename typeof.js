function createUser(name, contact) {
  let user = {
    name: name,
    email: null,
    telephone: null
  };

  if (typeof contact === "string") {
    user.email = contact; 
  } else
  if (typeof contacy === "number") {
    user.number = contact;
  }
  return user;
}

let user1 = createUser("Ola", "ola@e.pl");
let user2 = createUser("Maciek", 123456789);
console.log(user1)
console.log(user2)
