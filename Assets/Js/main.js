//Control
let isActive = false; let frameCount =0;
let frameCountDisplay = document.getElementById("FrameCount");
let frameRateDisplay = document.getElementById("FrameRate");
//Control

function checkArrowKey(e) {

    e = e || window.event;

    if (e.code == "ArrowUp") {
        console.log(e.code);
    }
    else if (e.code == 'ArrowDown') {
        console.log(e.code);
    }
    else if (e.code == 'ArrowLeft') {
        console.log(e.code);
    }
    else if (e.code == 'ArrowRight') {
        console.log(e.code);
    }
}

function enableKeyBoard(){
    document.onkeydown = checkArrowKey;
}
function disableKeyBoard(){
    document.onkeydown -= checkArrowKey;
}

function updateFrameCount(){
    frameCountDisplay.innerText = frameCount;
}


function calculateFrameRate(){
   
}


function start() {
    isActive = true;
}

function end() {
    isActive = false;
    disableKeyBoard();
}


function gameLoop(){
    start();
    enableKeyBoard();
    while (isActive == true) {
        frameCount++;
        updateFrameCount();      
        
        //failsafe
        if (frameCount == 50000) {
            end();
        }
    }


}