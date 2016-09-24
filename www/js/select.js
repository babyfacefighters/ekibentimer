var place = 0;
var departure;
var departure_index;
var arrival_h;
var arrival_m;
var challenge_h;
var challenge_m;
var options;

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
        arrival_h += 2;
        arrival_m = parseInt(departure.substring(2,4));
        document.getElementById("arrival_time").innerHTML = arrival_h +":" +departure.substring(2,4);
    }else {
        arrival_h = parseInt(departure.substring(0,2));
        //alert(departure.substring(0,2));
        arrival_h += 2;
        arrival_m = parseInt(departure.substring(3,5));
        document.getElementById("arrival_time").innerHTML = arrival_h +":" +departure.substring(3,5);
    }
}

function set_challenge(){
    departure_index = document.getElementById("departure_time").selectedIndex;
    departure = document.getElementById("departure_time").options[departure_index].text;
    if(document.getElementById("departure_time").selectedIndex === 1){
        challenge_h = parseInt(departure.substring(0,1));
        //alert(departure.substring(0,1));
        challenge_h++;
        challenge_m = parseInt(departure.substring(2,4));
        document.getElementById("challenge_time").innerHTML = challenge_h +":" +departure.substring(2,4);
    }else {
        challenge_h = parseInt(departure.substring(0,2));
        //alert(departure.substring(0,2));
        challenge_h++;
        challenge_m = parseInt(departure.substring(3,5));
        document.getElementById("challenge_time").innerHTML = challenge_h +":" +departure.substring(3,5);
    }
    options = {"challenge_time_h":parseInt(challenge_h), "challenge_time_m":parseInt(challenge_m)};
    //alert(options.challenge_time_h + ":" + options.challenge_time_m);
}
