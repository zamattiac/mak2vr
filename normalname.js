<?php
    session_start();
    if (!isset($_SESSION['normal'])) {
    header('Location: name.php');
    }
?>

var compIDs = ['abc01', 'cdf02', 'ghi03', 'normal', 'mak2vrh'];

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function checkCompID(user){

    var found = false
    for (i = 0; i < compIDs.length && !found; i++) {
      if (compIDs[i] === user) {
        found = true;
      }
    }


    return found;
}

function checkCookie() {

    var user = getCookie("normal");


    if (user != "" && checkCompID(user)) {
        document.getElementById("name").innerHTML = "::browsing as " + user.toLowerCase() + "::";

    }

    else if (!checkCompID(user) && user === ""){
        user = prompt("Enter compID to access this resource.\nOptions: 'abc01', 'cdf02', 'ghi03'","abc01");
        if (user === null){
        window.history.back();
        }
        user = user.toLowerCase();

        if (!checkCompID(user)) {
            window.history.back();
            setCookie("normal","",1);

        }

        else {
        setCookie("normal",user,1);
        document.location.reload(true);
        }
    }

    else {
        setCookie("normal","",1);
        window.history.back();
        }


}
