function recruitProgrammer(email, yearExp, level, languages) {
    if (level != "mid") {
        return false
    }

    let jsExp = false;
    let tsExp = false;
    if (languages.indexOf("JavaScript") >= 0) jsExp = true;
    if (languages.indexOf("TypeScript") >= 0) tsExp = true;

    if (jsExp || tsExp) {
        if (yearExp >= 1 && yearExp < 6) {
            console.log(email, "Przyjęty");
            return true;
        }
    }

    return false;

} 

console.log(recruitProgrammer("test@example.pl", 3, "mid", ["JavaScript"]));
