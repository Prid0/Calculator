let display = document.getElementById("display");
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            try {
                let result = eval(string);
                if (!isFinite(result)) {
                    throw new Error("Syntax Error");
                }
                result = parseFloat(result.toFixed(6));
                display.value = result;
                string = result.toString();
            } catch (error) {
                display.value = "Syntax Error";
                string = "";
                setTimeout(() => {
                    display.value = ""; 
                }, 1000);
            }
        } else if (e.target.innerHTML == "AC") {
            string = "";
            display.value = string;
        } else if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            display.value = string;
        } else {
            string += e.target.innerHTML;
            display.value = string;
        }
    });
});
