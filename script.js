const img = document.getElementById ('img');
const buttons = document.getElementById ('buttons');
const btnRed = document.getElementById ('red');
const btnYellow = document.getElementById ('yellow');
const btnGreen = document.getElementById ('green');
let colorIndex = 0;
let intevalId = null;

const trafficLight = (Event) => {
    stopAutomatic();
    changeBackgroundColor();
    turnOn[Event.target.id]();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const changeColor = () => {
    const colors = ['red', 'yellow', 'green'];
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

const changeColorAutomatic = () => {
    const colors = ['red', 'yellow', 'green'];
    const color = colors[colorIndex];
    turnOnAutomatic[color]();
    nextIndex();
}


const changeBackgroundColor = () => {
    btnRed.style.backgroundColor = 'cadetblue';
    btnYellow.style.backgroundColor = 'cadetblue';
    btnGreen.style.backgroundColor = 'cadetblue';
}

const turnOnAutomatic = {
    'red': () => img.src = './imgs/vermelho.png',
    'yellow': () => img.src = './imgs/amarelo.png',
    'green': () => img.src = './imgs/verde.png',
}

const turnOn = {
    'red': () => {img.src = './imgs/vermelho.png'; btnRed.style.backgroundColor = 'darkred'}, 
    'yellow': () => {img.src = './imgs/amarelo.png'; btnYellow.style.backgroundColor = '#adad23'},
    'green': () => {img.src = './imgs/verde.png'; btnGreen.style.backgroundColor = 'darkgreen'},
    'automatic': () => intevalId = setInterval(changeColorAutomatic, 1000)
}

const stopAutomatic = () => {
    clearInterval (intevalId);
}

buttons.addEventListener('click', trafficLight);


