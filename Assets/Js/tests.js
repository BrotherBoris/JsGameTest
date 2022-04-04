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