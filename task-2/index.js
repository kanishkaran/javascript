
function appendChar(button) {
    const char = button.textContent;
    const display = document.querySelector('.calcDisplay')
    display.append(char)
}

function clearDisplay(){
    const display = document.querySelector('.calcDisplay')
    display.textContent = ''
}

function getAns(){
    const displayExp = document.querySelector('.calcDisplay')
    displayExp.textContent = eval(displayExp.textContent)
}

function deleteChar() {
    const display = document.querySelector('.calcDisplay')
    display.textContent = display.textContent.slice(0, -1)
}