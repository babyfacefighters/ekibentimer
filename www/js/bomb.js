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
var lower_limit = 85;
var flag_bomb = 0;
var set_3minute = 0;
var arrival_3minute;
var bob_flag = 0;
var successflag = 0;
var moved = 0;

setInterval(bomb_timer, 1);
setInterval(caution, 10);

function bomb_timer(){
    if(bomb_time < 0 && flag_bomb != 1 && successflag != 1){
        flag_bomb = 1;
        moved = 1;
        myNavigator.pushPage("miss.html");
    }
    //現在時刻の取得
    now = new Date();
    now_h = now.getHours();
    now_m = now.getMinutes();
    now_s = now.getSeconds();
    now_amount = seconds_amouts(now_h, now_m, now_s);
    if(set_3minute === 0  && flag === 1){
        arrival_3minute = now_amount + 20;
        set_3minute = 1;
    }
    bomb_time = arrival_3minute-now_amount;

    bomb_m = Math.floor(bomb_time/60);
    bomb_s = bomb_time%60;

    if(bomb_s < 10)s = "0"+bomb_s;else s = bomb_s;

    bomb_display_time = "0"+bomb_m+"分"+s+"秒";
    //数字を表示する要素へ代入
    document.getElementById("bomb_timer_display").innerHTML = bomb_display_time;
    if(bomb_time > 0)bomb_time--;
}

function caution(){
    if(bomb_time < 10 && bob_flag != 1 && moved != 1){
        biyon();
        bob_flag = 1;
    }

    if(bomb_time < 10 && moved != 1){
        navigator.vibrate(3000);
    }


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

    if(bomb_time >= 0){
        width += accel;
        height += accel;
    }

    var target = document.getElementById("image_bomb");
    style_width = width+"%";
    style_height = height+"%";
    target.style.width = style_width;
    target.style.height =style_height;
}

function goto_success(){
    //audio.pause();
    //audio.currentTime = 0;
    successflag = 1;
    moved = 1;
    myNavigator.pushPage("success.html");
}

function biyon(){
    // AudioElement を作成
    var audio = new Audio();
    // サウンドファイルを指定
    audio.src = "bob.mp3";
    //media.loop = true;
    // 再生を開始する
    audio.play();
    // バイブレーション作動
}
