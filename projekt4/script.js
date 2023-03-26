
window.onload = function () {
    calculator.init();
};

let calculator = {
    buttons: undefined,
    input: undefined,

    init: function() {
        this.buttons = document.querySelectorAll('.numbers button, .operators button');
        this.input = document.getElementById('input');
    
        for (let i = 0; i < this.buttons.length; i++) {
            let element = this.buttons[i];
            element.addEventListener('click', this.buttonClick);
        };
    },

    buttonClick: function(event) {
        let divHtmlText = event.target.innerHTML;

        switch (divHtmlText) {
            case "=":
                calculator.evaluate();
            break;
            case "9":
            case "8":
            case "7":
            case "6":
            case "5":
            case "4":
            case "3":
            case "2":
            case "1":
            case "0":
            case "00":
            case "+":
            case "-":
            case "*":
            case "/":             
            case ".":
                calculator.addToInput(divHtmlText);
            break;
        }
    },

    addToInput: function(string) {
        this.input.value += string;
    },

    evaluate: function () {
        let result = math.evaluate(calculator.input.value);
        calculator.setInput(result);
    },

    clear: function() {
        calculator.setInput("");
    },

    setInput: function(string) { 
        calculator.input.value = string;
    }


};