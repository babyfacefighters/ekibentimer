var timer;
//到着時刻
var arrival_hour;
var arrival_minutes;
var arrival_seconds;
var arrival_amount;
//現在時刻
var now;
var now_h;
var now_m;
var now_s;
var now_amount;
//所要時間
var timer_h;
var timer_m;
var timer_s;
var timer_amount;
//表示要文字
var m;
var s;

setInterval(move_timer, 1000);

function move_timer(){
    //現在時刻の取得
    now = new Date();
    now_h = now.getHours();
    now_m = now.getMinutes();
    now_s = now.getSeconds();
    now_amount = seconds_amouts(now_h, now_m, now_s);
    //到着時刻の取得
    arrival_hour = 23;
    arrival_minutes = 50;
    arrival_seconds = 50;
    arrival_amount = seconds_amouts(arrival_hour, arrival_minutes, arrival_seconds);
    //移動時間を計算
    timer_amount = arrival_amount - now_amount;
    timer_h = Math.floor(timer_amount/3600);
    timer_m = Math.floor((timer_amount%3600)/60);
    timer_s = (timer_amount%3600)%60;

    //alert("今の時間は"+now_h+"時"+now_m+"分"+now_s+"秒");
    //alert("所要時間は"+timer_h+"時間"+timer_m+"分"+timer_s+"秒");
    if(timer_m < 10)m = "0"+timer_m;else m = timer_m;
    if(timer_s < 10)s = "0"+timer_s;else s = timer_s;
    timer = "0"+timer_h+"時間"+m+"分"+s+"秒";
    //数字を表示する要素へ代入
    document.getElementById("timer_display").innerHTML = timer;
}

function seconds_amouts(h, m, s){
    return h*3600+m*60+s;
}
