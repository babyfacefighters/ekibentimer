var bomb_time;
var bomb_m;
var bomb_s;
var bomb_display_time="";
var width = 80;
var height = 80;
var style_width;
var style_height;
var accel = 0.05;
var upper_limit = 100;
var lower_limit = 80;

setInterval(bomb_timer, 1);
setInterval(caution, 10);

function bomb_timer(){
    //現在時刻の取得
    now = new Date();
    now_h = now.getHours();
    now_m = now.getMinutes();
    now_s = now.getSeconds();
    now_amount = seconds_amouts(now_h, now_m, now_s);
    bomb_time = arrival_amount-now_amount+ 300;

    bomb_m = Math.floor(bomb_time/60);
    bomb_s = bomb_time%60;

    if(bomb_s < 10)s = "0"+bomb_s;else s = bomb_s;

    bomb_display_time = "0"+bomb_m+"分"+s+"秒";
    //数字を表示する要素へ代入
    document.getElementById("bomb_timer_display").innerHTML = bomb_display_time;
    if(bomb_time > 0)bomb_time--;
}

function caution(){
    if(bomb_time < 240 && bomb_time >= 180){//あと4分経過
        if(width > upper_limit)accel = -0.1;
        else if(width < lower_limit)accel = 0.1;
    }else if(bomb_time < 180 && bomb_time >= 120){//あと3分経過
        if(width > upper_limit)accel = -0.2;
        else if(width < lower_limit)accel = 0.2;
    }else if(bomb_time < 120 && bomb_time >= 60){//あと2分経過
        if(width > upper_limit)accel = -0.5;
        else if(width < lower_limit)accel = 0.5;
    }else if(bomb_time < 60 && bomb_time >= 30){//あと1分
        if(width > upper_limit)accel = -1;
        else if(width < lower_limit)accel = 1;
    }else if(bomb_time < 30 && bomb_time >= 10){//あと30秒
        if(width > upper_limit)accel = -2;
        else if(width < lower_limit)accel = 2;
    }else if(bomb_time < 10 && bomb_time >= 0){//あと10秒
        if(width > upper_limit)accel = -3;
        else if(width < lower_limit)accel = 3;
    }else{
        if(width > upper_limit)accel = -0.05;
        else if(width < lower_limit)accel = 0.05;
    }

    if(bomb_time > 0){
        width += accel;
        height += accel;
    }

    var target = document.getElementById("image_bomb");
    style_width = width+"%";
    style_height = height+"%";
    target.style.width = style_width;
    target.style.height =style_height;
}
