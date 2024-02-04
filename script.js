var timer = 6;
var score = 0;
var newTarget = 0;

// event bubbling
// jispe click karoge wo element par event raise hoga aur event listener na milne par event element ke parent mai listener dhundega parent mai na mila toh parent ke parent mai listener ko dhundega 

function makeBubble(){
    var clutter = "";

    for(var i = 1; i <= 100; i++){
        var randomNum = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${randomNum}</div>`
    }

    document.querySelector("#bottomPanel").innerHTML = clutter;
}

function runTimer(){
    var timerInt = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerVal").innerHTML = timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector("#bottomPanel").innerHTML = 
            `<h1>Game Over!</h1>
            <br>
            <h2>Your Score is ${score}</h2>`;
            newTarget = 0;
        }
    }, 1000)
}

function getNewTarget(){
    newTarget = Math.floor(Math.random()*10);
    document.querySelector("#newTarget").innerHTML = newTarget;
}

function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

document.querySelector("#bottomPanel").addEventListener("click", function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum === newTarget){
        increaseScore();
        makeBubble();
        getNewTarget();
    }
})

makeBubble();
runTimer();