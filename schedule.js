let date = new Date(); //get current date

let day = date.getDay(); // getDay returns 0 to 6; 0 = sun, 1 = mon and so on.
let hour= date.getHours(); // gethhours returns the hour (0-23)
let result = "";

let dungeons =
[
    {
        name: "蒼蠅王12人",
        html: "蒼蠅王12人<br>",
        days: [2, 4, 6]
    },
    {
        name: "暴食王12人",
        html: "暴食王12人<br>",
        days: [0, 1, 3, 5]
    },
    {
        name: "古龍最深處",
        html: "古龍最深處<br>",
        days: [1, 6]
    },
    {
        name: "古龍監獄城",
        html: "古龍監獄城<br>",
        days: [0, 2]
    },
    {
        name: "[兇夢]古龍最深處",
        html: "[<font color=#ff0000><b>兇夢</b></font>]古龍最深處<br>",
        days: [0, 5]
    },
    {
        name: "[兇夢]古龍監獄城",
        html: "[<font color=#ff0000><b>兇夢</b></font>]古龍監獄城<br>",
        days: [3, 6]
    },
    {
        name: "深海王阿斯莫德",
        html: "深海王阿斯莫德<br>",
        days: [0, 4, 6]
    },
];

dungeons.forEach((e, i) => {
    if(e.days.includes(day)){
        result += e.html;
    }
});

//outut the result to div
  document.getElementById("schedule").innerHTML = result;