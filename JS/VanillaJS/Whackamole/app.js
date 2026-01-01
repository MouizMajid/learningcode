const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');


let moleTimerId = null;
let countdownTimerId = null;
let result = 0;
let currentTime = timeLeft.textContent;
let hitPosition = null;

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole');
    })

    let randomPosition;
    do{
        randomPosition = square[Math.floor(Math.random() * 9)];
    }
    while(randomPosition.id === hitPosition){
    }
    randomPosition.classList.add('mole');
    hitPosition = randomPosition.id;
}
square.forEach( id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition){
            result = result + 1;
            score.textContent = result;
            clearInterval(moleTimerId);
            randomSquare();
            moleTimerId = setInterval(randomSquare, 1000);
        }
    })
})
function moveMole() {
    moleTimerId = setInterval(randomSquare, 1000);
}
function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;
    if(currentTime === 0) {
        clearInterval(moleTimerId);     // Stop moles from moving
        clearInterval(countdownTimerId); // Stop countdown
        alert('GAME OVER! Your final score is ' + result);
    }
}
moveMole();
countdownTimerId = setInterval(countDown, 1000);