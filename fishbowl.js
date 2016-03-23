<?php
    session_start();



    if (!isset($_SESSION['fishbowl'])) {
    header('Location: name.php');
    }
?>

var compIDs = ['mpm5mh','mak2vr','kml4bz','bjm3j','pr9tk','dy7kx','rm4za','afj5jz'];
var matches = ['matt <br><br>more christmas lights','kim<br><br>twinkle lights<br>stuffed animals<br>christmas sweater','dhwani<br><br>christmas lights<br>love','pooja<br><br>plush pajama pants','bruno - <br><br>underwear<br>http://amzn.to/1lwwD7k or http://amzn.to/1RnChF8','michelle<br><br>candy<br>not chocolate','andrew<br><br>grapefruit<br>chocolate','rahul<br><br>anything']


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

    var user = getCookie("fishbowl");


    if (user != "" && checkCompID(user)) {
        var index = compIDs.indexOf(user)
        document.getElementById("login").innerHTML = "your match"
        document.getElementById("check").innerHTML = "<br>you are " + user.toLowerCase() + "<br><br>your match is " + matches[index] + "<br><br><br><br>";
        document.getElementById("rules").style.color = "blue";
        document.getElementById("check").style.color = "blue";
    }

    else if (!checkCompID(user) && user === ""){
        user = prompt("enter your compID to find your match","");

        user = user.toLowerCase();

        if (!checkCompID(user)) {
            alert("try again")
            setCookie("fishbowl","",1);
        }

        else {
        setCookie("fishbowl",user,40);
        var index = compIDs.indexOf(user)
        document.getElementById("login").innerHTML = "your match"
        document.getElementById("check").innerHTML = "<br>you are " + user.toLowerCase() + "<br><br>your match is " + matches[index] + "<br><br><br><br>";
        document.getElementById("rules").style.color = "blue";
        document.getElementById("check").style.color = "blue";
        }
    }

    else {
        setCookie("fishbowl","",1);
       alert("try again")
        }

}

function hi() {
    document.getElementById("topleft").setAttribute("style","background-color:red;");
}


