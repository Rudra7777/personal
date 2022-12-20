


    let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

    let progressStartValue = 0,
    progressEndValue = 70,
    speed = 20;

    let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#00a8ff ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }
    }, speed);



    let circularProgress1 = document.querySelector(".circular-progress1"),
    progressValue1 = document.querySelector(".progress-value1");

    let progressStartValue1 = 0,
    progressEndValue1 = 70,
    speed1 = 20;

    let progress1 = setInterval(() => {
    progressStartValue1++;

    progressValue1.textContent = `${progressStartValue1}%`
    circularProgress1.style.background = `conic-gradient(#00a8ff ${progressStartValue1 * 3.6}deg, #ededed 0deg)`

    if(progressStartValue1 == progressEndValue1){
        clearInterval(progress1);
    }
    }, speed1);


function circle_front()
{
document.getElementById("text").innerHTML="Frontend"
document.getElementById("text1").innerHTML="Frontend"

    let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

    let progressStartValue = 0,
    progressEndValue = 70,
    speed = 20;

    let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#00a8ff ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }
    }, speed);

    let circularProgress1 = document.querySelector(".circular-progress1"),
    progressValue1 = document.querySelector(".progress-value1");

    let progressStartValue1 = 0,
    progressEndValue1 = 70,
    speed1 = 20;

    let progress1 = setInterval(() => {
    progressStartValue1++;

    progressValue1.textContent = `${progressStartValue1}%`
    circularProgress1.style.background = `conic-gradient(#00a8ff ${progressStartValue1 * 3.6}deg, #ededed 0deg)`

    if(progressStartValue1 == progressEndValue1){
        clearInterval(progress1);
    }
    }, speed1);

}
function circle_back()
{
    document.getElementById("text").innerHTML="Backend"
    document.getElementById("text1").innerHTML="Backend"

    let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

    let progressStartValue = 0,
    progressEndValue = 55,
    speed = 20;

    let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#ffc048 ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }
    }, speed);

    let circularProgress1 = document.querySelector(".circular-progress1"),
    progressValue1 = document.querySelector(".progress-value1");

    let progressStartValue1 = 0,
    progressEndValue1 = 55,
    speed1 = 20;

    let progress1 = setInterval(() => {
    progressStartValue1++;

    progressValue1.textContent = `${progressStartValue1}%`
    circularProgress1.style.background = `conic-gradient(#ffc048 ${progressStartValue1 * 3.6}deg, #ededed 0deg)`

    if(progressStartValue1 == progressEndValue1){
        clearInterval(progress1);
    }
    }, speed1);
}
function circle_soft()
{
    document.getElementById("text").innerHTML="Software"
    document.getElementById("text1").innerHTML="Software"

    let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

    let progressStartValue = 0,
    progressEndValue = 75,
    speed = 20;

    let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#4cd137 ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue == progressEndValue){
        clearInterval(progress);
    }
    }, speed);

    let circularProgress1 = document.querySelector(".circular-progress1"),
    progressValue1 = document.querySelector(".progress-value1");

    let progressStartValue1 = 0,
    progressEndValue1 = 55,
    speed1 = 20;

    let progress1 = setInterval(() => {
    progressStartValue1++;

    progressValue1.textContent = `${progressStartValue1}%`
    circularProgress1.style.background = `conic-gradient(#4cd137 ${progressStartValue1 * 3.6}deg, #ededed 0deg)`

    if(progressStartValue1 == progressEndValue1){
        clearInterval(progress1);
    }
    }, speed1);


}