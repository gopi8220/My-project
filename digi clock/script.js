//let dateTime=new Date()
let ampm=document.getElementById('ampm')

function displayTime(){
    let dateTime= new Date();
    let hr=dateTime.getHours();
    let min=dateTime.getMinutes();
    let sec=dateTime.getSeconds();
    if(hr>12){
    hr=hr-12
ampm.innerHTML='PM'
}
document.getElementById('hours').innerHTML=hr
document.getElementById('mins').innerHTML=min
document.getElementById('seconds').innerHTML=sec
}
setInterval(displayTime,500)