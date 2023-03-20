let name = "Kacper";
let surname = "Kowalski";

function test(name) {
    let surname = "Kiepski";
    console.log(name, surname);
    
    if (typeof name === "string") {
        let name = "Ferdynand";
        console.log(name, surname);
    }
    console.log(name, surname);
}

test("Andrzej");
console.log(name, surname);