//Control
let IsActive = false; let FrameCount =0;
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
    document.onkeydown -= checkArrowKey;
}
function disableKeyBoard(){
    document.onkeydown = checkArrowKey;
}

function start() {

}


function gameLoop(){
    document.onkeydown = checkArrowKey;


    while (IsActive==true) {

        FrameCount++;
    }


}