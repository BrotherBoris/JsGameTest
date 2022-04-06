let display = document.getElementById("Timer");


//asyncs
//setTimeout(showTime, 1000);
//setInterval(function (){displayTime(display)},1000);

function displayTime(display) {
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s<10) {
        s ="0"+s;
    }
    let time =h+":"+m+":"+s;;
    //console.log(time);
    display.innerText = time;
}

//showTime();
function showTime(){
    let stop = 2;
    displayTime(display)
    if (stop != 0) {
        stop--;
        setTimeout(showTime, 1000);
    }
    if (stop == 1){
        stop = 5;
    }
}

//document.body.style.opacity = 0.25;
