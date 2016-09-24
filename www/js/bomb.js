var bomb_time = 5 * 60;
var bomb_m;
var bomb_s;
var bomb_display_time="";

setInterval(bomb_timer, 1000);


function bomb_timer(){
    bomb_m = Math.floor(bomb_time/60);
    bomb_s = bomb_time%60;

    if(bomb_s < 10)s = "0"+bomb_s;else s = bomb_s;

    bomb_display_time = "0"+bomb_m+"分"+s+"秒";
    //数字を表示する要素へ代入
    document.getElementById("bomb_timer_display").innerHTML = bomb_display_time;
    bomb_time--;
}
