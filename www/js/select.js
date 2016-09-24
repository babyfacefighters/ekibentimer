var place = 0;
var departure;
var departure_index;
var departure_h;

function goto_tabbar(){
    place = 1;
    myNavigator.pushPage('tabbar.html');
}

function set_arrival(){
    departure_index = document.getElementById("departure_time").selectedIndex;
    departure = document.getElementById("departure_time").options[departure_index].text;
    if(document.getElementById("departure_time").selectedIndex === 1){
        departure_h = parseInt(departure.substring(0,1));
        //alert(departure.substring(0,1));
        departure_h++;
        document.getElementById("arrival_time").innerHTML = departure_h +":" +departure.substring(2,4);
    }else {
        departure_h = parseInt(departure.substring(0,2));
        //alert(departure.substring(0,2));
        departure_h++;
        document.getElementById("arrival_time").innerHTML = departure_h +":" +departure.substring(3,5);
    }
}
