const tileOne = document.querySelector(".tile1");
const tileTwo = document.querySelector(".tile2");
const tileThree = document.querySelector(".tile3");
const tileFour = document.querySelector(".tile4");
const tileFive = document.querySelector(".tile5");
const tileSix = document.querySelector(".tile6");
const tileSeven = document.querySelector(".tile7");
const tileEight = document.querySelector(".tile8");
const tileNine = document.querySelector(".tile9");
const resetButton = document.querySelector(".reset");
const win = document.querySelector("h1");

function setupGame(){
    tileOne.innerHTML = -1;
    tileTwo.innerHTML = 1;
    tileThree.innerHTML = 1;
    tileFour.innerHTML = 1;
    tileFive.innerHTML = -1;
    tileSix.innerHTML = -1;
    tileSeven.innerHTML = 1;
    tileEight.innerHTML = -1;
    tileNine.innerHTML = 1;

    colorShift(tileOne);
    colorShift(tileTwo);
    colorShift(tileThree);
    colorShift(tileFour);
    colorShift(tileFive);
    colorShift(tileSix);
    colorShift(tileSeven);
    colorShift(tileEight);
    colorShift(tileNine);

    win.style.fontSize = '0px'
}

function colorShift(i){
    if(i.innerHTML>0){
        i.style.backgroundColor = "black";
        i.style.color = "black";
    }else if(i.innerHTML<0){
        i.style.backgroundColor = "blue";
        i.style.color = "blue";
    }
    i.innerHTML = i.innerHTML*(-1);
}

function checkWin(){
    if(tileOne.innerHTML < 0
        && tileTwo.innerHTML < 0
        && tileThree.innerHTML < 0
        && tileFour.innerHTML < 0
        && tileFive.innerHTML < 0
        && tileSix.innerHTML < 0
        && tileSeven.innerHTML < 0
        && tileEight.innerHTML < 0
        && tileNine.innerHTML < 0){
            win.style.fontSize = '20px';
        }
    
}

setupGame();

setInterval(checkWin, 500)

resetButton.addEventListener('click', setupGame)


tileOne.addEventListener('click', e=>{
    colorShift(tileOne);
    colorShift(tileTwo);
    colorShift(tileFour);
})


tileTwo.addEventListener('click', e => {
    colorShift(tileOne);
    colorShift(tileTwo);
    colorShift(tileThree);
    colorShift(tileFive);
})

tileThree.addEventListener('click', e => {
    colorShift(tileTwo);
    colorShift(tileThree);
    colorShift(tileSix);
})

tileFour.addEventListener('click', e => {
    colorShift(tileOne)
    colorShift(tileFour)
    colorShift(tileFive)
    colorShift(tileSeven)
})

tileFive.addEventListener('click', e => {
    colorShift(tileTwo)
    colorShift(tileFour)
    colorShift(tileFive)
    colorShift(tileSix)
    colorShift(tileEight)
})

tileSix.addEventListener('click', e => {
    colorShift(tileThree)
    colorShift(tileFive)
    colorShift(tileSix)
    colorShift(tileNine)
})

tileSeven.addEventListener('click', e => {
    colorShift(tileFour)
    colorShift(tileSeven)
    colorShift(tileEight)
})

tileEight.addEventListener('click', e => {
    colorShift(tileFive)
    colorShift(tileSeven)
    colorShift(tileEight)
    colorShift(tileNine)
})

tileNine.addEventListener('click', e => {
    colorShift(tileSix)
    colorShift(tileEight)
    colorShift(tileNine)
})

