const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');

let time = 0;
let score = 0;
const colors = ['linear-gradient(90deg, #16D9E3 0%, #30C7EC 47%, #46AEF7 100%)',
                'linear-gradient(90deg, #7e8369 0%, #a730ec 47%, #e5f746 100%)',
                ' linear-gradient(90deg, #696a83 0%, #ec309e 47%, #f76646 100%)']



startBtn.addEventListener('click', event => {
    event.preventDefault();
    screens[0].classList.add('up');
})
timeList.addEventListener('click', event => {
    if(event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
    }
})
board.addEventListener('click', event => {
    if(event.target.classList.contains('circle')) {
        score++;
        event.target.remove();
        createRandomCircle();
    }
})



function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle();
    setTime(time);
}
function finishGame() {
    timeEl.parentNode.classList.add('hide');
    board.innerHTML = `<h2>Ваш рахунок: <span class ="primary">${score}</span></h2>`

}

function decreaseTime() {
    if(time === 0) {
        finishGame();
    } else {
        let current = --time;
        if(current < 10) {
            current = `0${current}`;
        }
        setTime(current);
    }

}
function setTime(value) {
    timeEl.innerHTML = `00:${value}`;
}

function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getRandomNumber(10, 60);
    const {width, height} = board.getBoundingClientRect();

    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);

    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    circle.style.background = `${randomColor()}`;
    circle.classList.add('circle');

    board.append(circle);
}

function getRandomNumber(min, max) {
    return Math.round((Math.random() * (max- min) + min))
}
function randomColor() {
    const index = Math.floor(Math.random() *  colors.length);
    return colors[index];
}










