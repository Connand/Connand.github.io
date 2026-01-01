let date = new Date(); //get current date

let day = date.getDay(); // getDay returns 0 to 6; 0 = sun, 1 = mon and so on.
let hour= date.getHours(); // gethhours returns the hour (0-23)
  
let boss_names = [
"先代之龍赫克頓蓋爾 (魔龍形)<img class=\"inline-img\" src=\"https://i.imgur.com/FWfg4L0.png\" style=\"height:32px\">", 
"赤色死神 (使徒型)<img class=\"inline-img\" src=\"https://i.imgur.com/t8j9844.png\" style=\"height:32px\">", 
"黃金莫拉克 (前腦型)<img class=\"inline-img\" src=\"https://i.imgur.com/acS6rsI.png\" style=\"height:32px\">",
"馬列克 (野生型)<img class=\"inline-img\" src=\"https://i.imgur.com/8ONbMJo.png\" style=\"height:32px\">", 
"島的主人 (食蟲型)<img class=\"inline-img\" src=\"https://i.imgur.com/HoxQxvb.png\" style=\"height:32px\">",
"巴司基 (海底型)<img class=\"inline-img\" src=\"https://i.imgur.com/I6BPtrp.png\" style=\"height:32px\">"
];
//let mockStart = new Date("Sep 25, 2021 04:00:00");
let mockStart = new Date("Apr 22, 2023 04:00:00");
let _second = 1000;
let _minute = _second * 60;
let _hour = _minute * 60;
let _day = _hour * 24;

let now = new Date();
let elaped = now - mockStart;
let number_of_week = Math.ceil(elaped / (7 * 24 * 60 * 60 * 1000)); // 算第幾季：1周 = 7日*24小時*60分鐘*60秒*1000毫秒
let mock_boss_number = Math.floor(elaped / (7 * 24 * 60 * 60 * 1000) % 6); // 算第幾周 => boss
let mockEnd = new Date(mockStart.getTime() + number_of_week * (7 * 24 * 60 * 60 * 1000)); // 算結束日
document.getElementById('mockBattleInfo').innerHTML = "<font size=4><b>第 " + number_of_week + " 周</b><a href=\"https://cls.mangot5.com/game/cls/news/detail?contentNo=46589\" rel=\"external nofollow noreferrer\" target=\"_blank\">模擬戰</a>（<a href=\"/datasets/mockbattle_rank/\" rel=\"external nofollow noreferrer\" target=\"_blank\">分數表</a>）</font><br>";
document.getElementById('mockBattleInfo').innerHTML += "<b>本周BOSS</b>：<br>- " + boss_names[mock_boss_number];
document.getElementById('mockBattleInfo').innerHTML += "<br><b>下周BOSS</b>：<br>- " + boss_names[(mock_boss_number + 1) % 6];

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


function getDateString (time) {
	let day = time.getDate();
	let month = time.getMonth() + 1;
    //month = 4; day = 30;
	
	if (day < 10) {
		day = '0' + day;
	}

	if (month < 10) {
		month = `0${month}`;
	}
	
	//console.log(month + "/" + day);
	return (month + "/" + day)
}

// let time = new Date();
// getDateString(time);

/* let birthdays = {
	"06/03": {name: "李世河", code: "STRIKER"},
	"04/30": {name: "李世河", code: "STRIKER"},
	"02/28": {name: "李世河", code: "STRIKER"},
	"02/27": {name: "測試名", code: "TESTCODE"}
}; */

let birthdays = {
  "06/03":{name:"李世河",code:"STRIKER"},
  "04/30":{name:"<font color=#ff40af>李雪菲</font>",code:"CASTER"},
  "05/17":{name:"徐維莉",code:"RANGER"},
  "11/22":{name:"J",code:"FIGHTER"},
  "10/31":{name:"米斯特汀",code:"LANCER"}, 
  "01/23":{name:"伊莉雅",code:"IDOL"}, 
  
  "07/16":{name:"納塔",code:"HUNTER"},
  "06/06":{name:"蕾比雅",code:"WITCH"},
  "12/13":{name:"哈比",code:"ROGUE"},
  "05/28":{name:"緹娜",code:"ARMS"},
  "10/03":{name:"薇歐莉特",code:"VALKYRIE"}, 
  "12/20":{name:"特莉絲",code:"VAGABOND"},
  
  "04/05":{name:"沃爾夫姜．施奈伊德",code:"LIBRARIAN"},
  "09/23":{name:"露娜．埃癸斯",code:"AEGIS"},
  "03/26":{name:"索瑪．阿斯特拉",code:"ASTRA"},
  "09/09":{name:"白．溫徹斯特",code:"MYSTIC"},
  "08/25":{name:"賽特．賽赫麥特",code:"BEAST"}, 
  
  "07/02":{name:"金徹斯",code:"NONAME"},
  "11/02":{name:"未來",code:"REAPER"},
  "04/12":{name:"<font color=#64668d>銀河</font>",code:"KNIVES"},
  "02/28":{name:"露西．普拉蒂尼",code:"ALTEREGO"},
  "03/02":{name:"愛里",code:"DEVILISH"}, 
}

if (typeof birthdays[getDateString(now)] != 'undefined') {
    image_name = "/img/birthday_images/DLG_EVENT_BIRTHDAY_" + birthdays[getDateString(now)].code + ".PNG";
    document.getElementById('birthday').innerHTML = "<b>今天是 " + birthdays[getDateString(now)].name + " 的生日！！</b><br>- 除了慶祝生日外，記得領取遊戲內的生日禮物箱喔！<a href=\"" + image_name + "\" rel=\"external nofollow noreferrer\" target=\"_blank\"><img src=\"" + image_name + "\"></a>";
}
else {
    document.getElementById('birthday-character').remove();
}
