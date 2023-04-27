let count = 0;
function keysDown(event){
    switch (event.code) {
        case "Backspace":
            let text = document.querySelector('.textarea').innerText;
            text = text.slice(0, -1);
            document.querySelector('.textarea').innerText = text;
            document.querySelectorAll('.key')[13].style.backgroundColor = 'grey';
            break;
        case "Space":
            document.querySelector('.textarea').innerText += '\xa0';
            document.querySelectorAll('.key')[53].style.backgroundColor = 'grey';
            break;
        case "Tab":
            document.querySelector('.textarea').innerText += '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0';
            document.querySelectorAll('.key')[14].style.backgroundColor = 'grey';
            event.preventDefault();
            break;
        case "CapsLock":
            count++;
            if(count % 2 == 1){
                document.querySelectorAll('.key')[28].style.backgroundColor = 'grey';
            } else {
                document.querySelectorAll('.key')[28].style.backgroundColor = 'white';
            }
            break;
        case "Enter":
            document.querySelector('.textarea').innerText += '\n';
            document.querySelectorAll('.key')[40].style.backgroundColor = 'grey';
            break;
        case "ShiftLeft":
            document.querySelectorAll('.key')[41].style.backgroundColor = 'grey';
            break;
        case "ShiftRight":
            document.querySelectorAll('.key')[52].style.backgroundColor = 'grey';
            break;
        default:
            document.querySelector('.textarea').innerText += `${event.key}`;
            for (let i = 0; i < document.querySelectorAll('.key').length; i++){
                if (document.querySelectorAll('.key')[i].innerText == event.key) {
                    document.querySelectorAll('.key')[i].style.backgroundColor = 'grey';
                }
            }
            break;
    }
}


function keysUp(event) {
    switch (event.code) {
        case "Space":
            document.querySelectorAll('.key')[53].style.backgroundColor = 'white';
            break;
        case "ShiftLeft":
            document.querySelectorAll('.key')[41].style.backgroundColor = 'white';
            break;
        case "ShiftRight":
            document.querySelectorAll('.key')[52].style.backgroundColor = 'white';
            break;
        case "CapsLock":
            break;
        default:
            for (let i = 0; i < document.querySelectorAll('.key').length; i++) {
                if (document.querySelectorAll('.key')[i].innerText == event.key) {
                    document.querySelectorAll('.key')[i].style.backgroundColor = 'white';
                }
            }
            break;
    }
}

window.addEventListener('keydown', keysDown);
window.addEventListener('keyup', keysUp);