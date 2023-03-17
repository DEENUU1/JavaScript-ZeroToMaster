function cleanText(text) {
    let newText = text.replace(/html/gi, "...");
    return newText
}
console.log(cleanText("Python JavaScript HTML Flask", "HTML"));