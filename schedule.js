let date = new Date(); //get current date

let day = date.getDay(); // getDay returns 0 to 6; 0 = sun, 1 = mon and so on.
let hour= date.getHours(); // gethhours returns the hour (0-23)
let result = "";

let dungeons =
[
    {
        name: "[會面]蒼蠅王伯爾戴布(舊蟲)",
        html: '[會見]蒼蠅王伯爾戴布(舊蟲)<br>',
        days: [2, 4, 6]
    },
    {
        name: "[參見]暴食王伯爾戴布(新蟲)",
        html: '[參見]暴食王伯爾戴布(新蟲)<br>',
        days: [0, 1, 3, 5]
    },
    {
        name: "古龍最深處",
        html: '古龍最深處<br>',
        days: [1, 6]
    },
    {
        name: "古龍監獄城",
        html: '古龍監獄城<br>',
        days: [0, 2]
    },
    {
        name: "[兇夢]古龍最深處",
        html: '[<font color=#ff0000><b>兇夢</b></font>]古龍最深處<br>',
        days: [0, 5]
    },
    {
        name: "[兇夢]古龍監獄城",
        html: '[<font color=#ff0000><b>兇夢</b></font>]古龍監獄城<br>',
        days: [3, 6]
    },
    {
        name: "[會面]深海王阿斯莫德(藍海)",
        html: '[會面]深海王阿斯莫德(藍海)<br>',
        days: [1, 2, 5]
    },
    {
        name: "[參見]縱慾王阿斯莫德(紅海)",
        html: '[<font color=#ff0000><b>參見</b></font>]縱慾王阿斯莫德(紅海)<br>',
        days: [0, 4, 6]
    }, 
    {
        name: "格莫瑞科學設施",
        html: '<a href="/datasets/mutantPNA/">格莫瑞科學設施</a><br>',
        days: [3, 4, 6]
    }
];

dungeons.forEach((e, i) => {
    if(e.days.includes(day)){
        result += e.html;
    }
});

//outut the result to div
  document.getElementById("schedule").innerHTML = result;
  
let boss_names = [
"黃金莫拉克(前腦型)<img class=\"inline-img\" src=\"https://i.imgur.com/acS6rsI.png\" style=\"height:32px\">", 
"先代之龍赫克頓蓋爾(魔龍形)<img class=\"inline-img\" src=\"https://i.imgur.com/FWfg4L0.png\" style=\"height:32px\">", 
"赤色死神(使徒型)<img class=\"inline-img\" src=\"https://i.imgur.com/t8j9844.png\" style=\"height:32px\">"
];
let mockStart = new Date("Sep 25, 2021 04:00:00");
let _second = 1000;
let _minute = _second * 60;
let _hour = _minute * 60;
let _day = _hour * 24;

let now = new Date();
let elaped = now - mockStart;
let number_of_season = Math.ceil(elaped / (12 * 7 * 24 * 60 * 60 * 1000)); // 算第幾季：1季 = 12周*7日*24小時*60分鐘*60秒*1000毫秒
let mock_boss_number = Math.floor(elaped / (7 * 24 * 60 * 60 * 1000) % 3); // 算第幾周 => boss
let mockEnd = new Date(mockStart.getTime() + number_of_season * (12 * 7 * 24 * 60 * 60 * 1000)); // 算季結束日
document.getElementById('mockBattleInfo').innerHTML = "<font size=4><b>第 " + number_of_season + " 季</b><a href=\"https://cls.mangot5.com/game/cls/news/detail?contentNo=46589\" rel=\"external nofollow noreferrer\" target=\"_blank\">模擬戰</a></font><br>";
document.getElementById('mockBattleInfo').innerHTML += "<b>本周BOSS</b>：<br>- " + boss_names[mock_boss_number];

document.getElementById('mockBattleEnd').innerHTML = '<b>' + mockEnd.getFullYear() + '/';
document.getElementById('mockBattleEnd').innerHTML += '<b>' + (mockEnd.getMonth() + 1) + '/';
document.getElementById('mockBattleEnd').innerHTML += '<b>' + mockEnd.getDate() + ' ';
document.getElementById('mockBattleEnd').innerHTML += '<b>' + mockEnd.getHours() + ':00';

function showRemaining() {
    let now = new Date();
    let distance = mockEnd - now;
	
    if(distance <= 0) {
        document.getElementById('mockBattle').innerHTML = '0日00小時00分00秒';
    }
    let days = Math.floor(distance / _day);
    let hours = Math.floor((distance % _day) / _hour);
    let minutes = Math.floor((distance % _hour) / _minute);
    let seconds = Math.floor((distance % _minute) / _second);

    document.getElementById('mockBattle').innerHTML = '<b>' + days + '日';
    document.getElementById('mockBattle').innerHTML += '<b>' + ('0' + hours).slice(-2) + '時';
    document.getElementById('mockBattle').innerHTML += '<b>' + ('0' + minutes).slice(-2) + '分';
    document.getElementById('mockBattle').innerHTML += '<b>' + ('0' + seconds).slice(-2) + '秒';
}
showRemaining();
setInterval(showRemaining, 1000);