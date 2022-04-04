let d = new Date();

function updateTime() {
    let lastSecont=0;
    let actualSecond=0;
    while(true){
        actualSecond = d.getSeconds();
        if(actualSecond != lastSecont){
            lastSecont = actualSecond;
            console.log(actualSecond);
        }
    }
}

let stop = 5;
function Looper() {
    setTimeout(myFunction, 1000);
}

function myFunction() {
    if(stop != 0){
        stop--;
        const d = new Date;
        console.log(d.getSeconds());
        setTimeout(myFunction, 1000);
    }
    if (stop < 0) {
        stop = 5;
    }
}


/* const {late} = await fetchBill();

if (late > 0) {
    let faded = (100-late)/100;
    document.body.style.opacity = faded;
} */
//document.body.style.opacity = 0.25;
