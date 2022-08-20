
// Add code to load daily data when page is loaded
if (window.addEventListener) {
    window.addEventListener("load", getAdvice, false);
 } else if (window.attachEvent) {
    window.attachEvent("onload", getAdvice);
 } else {
    window.onload = getAdvice; //will override previously attached event listeners.
 }

document.getElementById('dice-container').addEventListener('click', getAdvice);



function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(function (res){
            return res.json();
        })
        .then(function(data) {
            console.log(data.slip.id);
            document.getElementById('advice-number').innerHTML = `Advice # ${data.slip.id}`;
            document.getElementById('advice-text').innerHTML = data.slip.advice;
        });
}

