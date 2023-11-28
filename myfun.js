function myFun(){
    var now = new Date();
    var hour = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    hours = hour % 12;
    let ahsu = hours +`:`+ minutes + `:`+ seconds;
    document.getElementById("time").textContent= ahsu;

}
setInterval(myFun, 1000);