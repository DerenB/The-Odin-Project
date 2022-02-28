// REFERENCE TO THE DISPLAY
let display = document.getElementById('resultBar');

let buttons = Array.from(document.getElementsByClassName('button'));

// EVENT LISTENER FOR THE BUTTONS
buttons.map (button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'CE':
                display.innerText = '';
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "ERROR";
                }
                break;
            case 'del':
                if (display.innerText) {
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});

