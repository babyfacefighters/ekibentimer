var place = 0;
var departure;
var departure_index;
var arrival_h;
var arrival_m;
var challenge_h;
var challenge_m;
var options;
var d_sta;
var g_sta;

function goto_tabbar(){
    place = 1;
    myNavigator.pushPage('tabbar.html', options);
}

function set_arrival(){
    departure_index = document.getElementById("departure_time").selectedIndex;
    departure = document.getElementById("departure_time").options[departure_index].text;
    if(document.getElementById("departure_time").selectedIndex === 1){
        arrival_h = parseInt(departure.substring(0,1));
        //alert(departure.substring(0,1));
        arrival_h += 1;
        arrival_m = parseInt(departure.substring(2,4));
        arrival_m += 4;
        if(arrival_m < 10){
            document.getElementById("arrival_time").innerHTML = arrival_h +":" + "0"+arrival_m;
        }else{
            document.getElementById("arrival_time").innerHTML = arrival_h +":" + arrival_m;
        }
    }else {
        arrival_h = parseInt(departure.substring(0,2));
        //alert(departure.substring(0,2));
        arrival_h += 1;
        arrival_m = parseInt(departure.substring(3,5));
        arrival_m = parseInt(arrival_m);
        arrival_m += 4;
        if(arrival_m < 10){
            document.getElementById("arrival_time").innerHTML = arrival_h +":" + "0"+arrival_m;
        }else{
            document.getElementById("arrival_time").innerHTML = arrival_h +":" + arrival_m;
        }
    }
}

function set_challenge(){
    departure_index = document.getElementById("departure_time").selectedIndex;
    departure = document.getElementById("departure_time").options[departure_index].text;
    if(document.getElementById("departure_time").selectedIndex === 1){
        challenge_h = parseInt(departure.substring(0,1));
        //alert(departure.substring(0,1));
        challenge_m = parseInt(departure.substring(2,4));
        if(challenge_m > 19){
            challenge_h++;
            challenge_m -= 20;
        }

        if(challenge_m < 10){
            document.getElementById("challenge_time").innerHTML = challenge_h +":" + "0"+challenge_m;
        }else{
            document.getElementById("challenge_time").innerHTML = challenge_h +":" + challenge_m;
        }
    }else {
        challenge_h = parseInt(departure.substring(0,2));
        //alert(departure.substring(0,2));
        challenge_h++;
        challenge_m = parseInt(departure.substring(3,5));
        if(challenge_m > 19){
            challenge_h++;
            challenge_m -= 20;
        }

        if(challenge_m < 10){
            document.getElementById("challenge_time").innerHTML = challenge_h +":" + "0"+challenge_m;
        }else{
            document.getElementById("challenge_time").innerHTML = challenge_h +":" + challenge_m;
        }
    }
    var index = document.getElementById("departure_station").selectedIndex;
    d_sta = document.getElementById("departure_station").options[index].text;
    index = document.getElementById("goal_station").selectedIndex;
    g_sta = document.getElementById("goal_station").options[index].text;
    options = {"challenge_time_h":parseInt(challenge_h), "challenge_time_m":parseInt(challenge_m),
                "dstation":d_sta, "gstation":g_sta};
    //alert(options.dstation + ":" + options.gstation);
}
