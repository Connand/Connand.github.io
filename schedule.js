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

let mockEnd = new Date("Dec 18, 2021 04:00:00");
let _second = 1000;
let _minute = _second * 60;
let _hour = _minute * 60;
let _day = _hour * 24;

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