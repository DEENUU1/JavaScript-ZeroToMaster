let arr = ["dodge", "chevy", "gmc", "pontiac", "acura", "toyota"];
        
console.log("Sprzedane", arr.shift());
console.log("Sprzedane", arr.shift());
console.log("Sprzedane", arr.shift());

console.log("Dodane", arr.push("nissan"));
console.log("Dodane", arr.push("porsche"));
console.log("Dodane", arr.push("porsche"));
console.log("Dodane", arr.push("merc"));

console.log("Klient zrezygnował", arr.unshift("gmc"));

console.log(arr);