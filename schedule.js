let date = new Date(); //get current date

let day = date.getDay(); // getDay returns 0 to 6; 0 = sun, 1 = mon and so on.
let hour= date.getHours(); // gethhours returns the hour (0-23)
let result = "";

if(day == 0) {
    result += "暴食王12人<br>";
    result += "古龍監獄城<br>";
    result += "深海王阿斯莫德<br>";
    result += "[<font color=#ff0000><b>兇夢</b></font>]古龍最深處<br>";
    //result += '<a class="button--animated" href="" rel="" target="_blank">FB粉絲專頁</a>';
}
else if(day == 1) {
    result += "暴食王12人<br>";
    result += "古龍最深處<br>";
}
else if(day == 2) {
    result += "蒼蠅王12人<br>";
    result += "古龍監獄城<br>";
}
else if(day == 3) {
    result += "暴食王12人<br>";
    result += "[<font color=#ff0000><b>兇夢</b></font>]古龍監獄城<br>";
}
else if(day == 4) {
    result += "蒼鷹王12人<br>";
    result += "深海王阿斯莫德<br>";
}
else if(day == 5) {
    result += "暴食王12人<br>";
    result += "[<font color=#ff0000><b>兇夢</b></font>]古龍最深處<br>";
}
else if(day == 6) {
    result += "蒼蠅王12人<br>";
    result += "[<font color=#ff0000><b>兇夢</b></font>]古龍監獄城<br>";
    result += "深海王阿斯莫德<br>";
    result += "古龍最深處<br>";
}



//outut the result to div
  document.getElementById("schedule").innerHTML = result;