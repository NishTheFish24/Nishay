let timer;
let startDate;

function startTest() {
    document.querySelector("#result").innerHTML = "&nbsp;";
    document.querySelector("#target").style.backgroundColor = "rgb(180, 0, 0)"
    clearTimeout(timer);
    let randTime = Math.random() * 10000 + 2000;
    timer = setTimeout(changeColor, randTime);
}

function changeColor() {
    let target = document.querySelector("#target");
    target.style.backgroundColor = "green";
    startDate= new Date()
}

function reactionClick() {
    let target = document.querySelector("#target")
    if(target.style.backgroundColor === "green"){
        stopTime()
    }else{
        fail()
    }
}

function stopTime(){
    let finalTime = new Date()- startDate;
    finalTime/=1000;
    document.querySelector("#result").innerHTML = finalTime + " Seconds"
}

function fail(){
    clearTimeout(timer);
    document.querySelector("#result").innerHTML ="FAIL!!!"
}