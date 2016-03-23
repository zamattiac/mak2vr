// work on s, x, email

<?php
    session_start();
    if (!isset($_SESSION['user'])) {
    header('Location: name.php');
    }
?>

var compIDs = ['mak2vr','mpm5mh','iap5fk','kml4bz','bjm3j'];
var application = "";
var language = "jack/";
var d = false;
var dictionary = ['shit', 'shiver me timbers', 'shit','are', 'be', 'are','am', 'be', 'am', 'is', 'be', 'is', 'butt','poopdeck','butt','ship', 'ladyship', 'ship', 'hello', 'ahoy', 'hello', 'friend', 'matey', 'friend', 'my', 'me', 'my', 'yes', 'YARR', 'yes', 'stop', 'Avast ye', 'stop', 'hello', 'Ahoy', 'hello', 'pirate', 'buccaneer', 'pirate', 'get out', 'Walk the plank', 'get out', 'sex', 'plunder', 'sex', 'yar', 'YARRRRGH', 'yar', 'asshole', 'scurvy dog', 'asshole', 'friend', 'matey', 'friend', 'oh my!', 'Shiver me timbers!', 'oh my!', 'shit', 'poop deck', 'shit', 'penis', 'ARRRGH ME PENIS', 'penis', 'rape', 'plunder', 'rape', 'vagine', 'ARRRGH ME VAGINE', 'vagine', 'uterus', 'ARRRGH ME UTERUS', 'uterus', 'bum hole', 'ARRRGH ME BUM HOLE', 'bum hole', 'bumhole', 'ARRRGH ME BUMHOLE', 'bumhole', 'is', 'be', 'is', 'ocean', 'the Seven Seas', 'ocean', 'hi', 'ahoy', 'hi', 'captain', "cap'n", 'captain', 'your', 'yer', 'your', 'you', 'ye', 'you', 'leave', 'walk the plank', 'leave', 'gold', 'dubloons', 'gold', 'goochdillard', 'ARRRGH ME GOOCHDILLARD', 'goochdillard', 'penis', 'ARRRGH ME PENIS', 'penis', 'computer', 'compooper', 'computer', 'eyelid', 'ARRRGH ME EYELID', 'eyelid', '']

function refocus() {
    $("setter").focus();

}

function divReset() {

    $("setter").style.left = "-500vw";
    $("setter").style.border = "";

    $("getter").style.position = "absolute";
    $("getter").style.left = "0vw";
    $("getter").style.margin = "5 px";
    $("getter").style.border = "";

    $("getter").style.height = "90vh";
    $("getter").style.width = "100vw";

    $("history").innerHTML = "";
    window.scrollTo(0, 0);


}

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

//var objDiv = $("getter");
//objDiv.scrollTop = objDiv.scrollHeight;

function checkCookie() {

    var user = getCookie("username");


    if (user != "" && checkCompID(user)) {
//        $("writer").innerHTML = user.toLowerCase() + "::";
        return user.toLowerCase();

    }

    else if (!checkCompID(user) && user === ""){
        user = prompt("Enter compID to access this resource","mak2vr");
//        user = $("setter").innerHTML;
        if (user === null){
            window.history.back();
        }
        user = user.toLowerCase();

        if (!checkCompID(user)) {
            window.history.back();
            setCookie("username","",1);
        }

        else {
        setCookie("username",user,40);
        document.location.reload(true);
        }
    }

    else {
        setCookie("username","",1);
        window.history.back();
        }


}

function lineHeader() {
    user = checkCookie();
    if (d) {
    return "";
    }
    return ("~" + user + "/terminal" +'-' + language + application + ":: ");
}

function print(statement) {
    displayHistory = $("history").innerHTML;
    $("history").innerHTML = displayHistory + statement + "<br>";
}

//"comma split, range multiplier"

function parse(display, input) {

    var firstSplit = input.split(' ');
    if (firstSplit[0].match('/')) {
        divReset();
        language = firstSplit[0];
        firstSplit.shift();
        var output = firstSplit.join(" ");
        console.log(output);
    }
    else {
        var output = input;
        console.log(output);
    }

    switch(language) {

    case "jack/":
        if (output.split(',').length > 1) {
            commaSplit = output.split(',');
            var option = commaSplit[1].split('');
            letter = option.shift();
            if (option[0] === " ") {option.shift();}
            option = option.join("");

            switch(letter) {

            case "d":
            if (d){
            d = false;
            } else {d = true;}
            break;

            case "e":
            console.log(commaSplit[0]);
            jack(display, commaSplit[0]);
            application = "";
            console.log(option);
            jack(display, option);
            break;

            case "x":
            commaSplit.pop();
            var popped = commaSplit.join("");
            var x = parseInt(option);
            console.log(x);
            var i;
            for (i=0;i<x;i++) {
                if (i === 0 || application == "") {jack(display,popped);}
                else if (application != "") {application = "";jack("", popped);}
            }
            break;

            default:
            print(letter + ": option not found");
            break;
            }
        }
        else {jack(display, output);}

    break;

    case "html/":

    html();
    break;

    default:
    print("error: parse lang. type 'help'");
    language = "jack/";
    break;
    }
}

function html() {

    $("setter").style.left = "0vw";
    $("history").innerHTML = "";
    window.scrollTo(0, 0);

    $("getter").style.left = "40vw";
    $("getter").style.height = "90vh";
    $("getter").style.width = "58vw";
    $("getter").style.border = "thick solid #0000FF";
    $("setter").style.border = "thick solid green";}



function jack(display, input) {

    console.log("directly in: " + input);

    print(display);

    var splitCommand = input.split(" ");

    if (splitCommand[0].match("end")) {
        application = "";
    }

    if (application === "") {
    var command = splitCommand[0];
    }

    else {
    var command = application;
    splitCommand.splice(0,0,command);
    }

    var first = splitCommand[0];
    var second = splitCommand[1];
    var third = splitCommand[2];
    var fourth = splitCommand[3];
//        var fifth = splitCommand[4];

//

//
    switch(first) {

        case "clear":
        $("history").innerHTML = "";
        window.scrollTo(0, 0);

        break;

        case "print":
        application = "print";
        if (first === "print") {
            var statement = '';
            var i;
            for (i = 1; i < splitCommand.length; i++) {
            statement += (splitCommand[i] + " ");
            }
        }


        else {
            var statement = '';
            var i;
            for (i=0; i<splitCommand.length; i++) {
            statement += (splitCommand[i] + " ");
            }}

        print(statement);

        break;

        case "hello":
        print("Nice to see you.");
        break;

        case "color":
        application = "color"

        if (second === "bg"){
        $("body").style.backgroundColor = third;
        }

        if (second === "text") {
        $("body").style.color = third;
        }

        if (second === "reset") {
        $("body").style.backgroundColor = "#ffcc66";
        $("body").style.color = "black";
        }

        else {print(second + ": not found. use bg or text [color] or 'reset'")}

        break;

        case "help":
        print("<br>languages:<br>jack/<br>html/<br><br>jack/ commands: <br>print<br>hello<br>color<br>go<br>pirate<br>logout<br><br>clear<br>end<br><br>jack/ options:<br>x[int] multiplier<br>d line head dis/enable<br>e end and start new application");
        print("<br>'more:'");
        break;

        case "more":
        $("history").innerHTML = "";
        window.scrollTo(0, 0);
        print("<div style='width:90vw;height:70vh;'><div style='float:left;width:40vw;'><br>Help:<br><br>languages:<br>jack/<br>html/<br><br>jack/ commands: <br>print<br>hello<br>color<br>go<br>pirate<br>logout<br><br>clear<br>end<br><br>jack/ options:<br>x[int] multiplier<br>d line head dis/enable<br>e end and start new application</div><div style='float:left;position:relative;'><br><img style='padding-right:10px;' src='jack.jpg' width='250px'></div> <div><br>Acknowledgements:<br><br>Jack the dog<br><br><br><br><br><br><br><br><br><br><br><br>//////////////////////////<br>//matthew keitelman 2015//<br>//////////////////////////</div></div>");

        break;

        case "end":
        print("process ended");
        application = '';

        break;

        case "go":
        application = "go"
        if (splitCommand.length > 1){
        var win = window.open("http://people.virginia.edu/~mak2vr/"+ second);
        win.focus();}
        else {print("command pagename or 'files':")}
        break;

        case "logout":
        application = "logout";
        if (splitCommand.length > 1){
            if (second === "escirc") {
                var erase = "username";
            }
            else if (second === "fishbowl") {
                var erase = second;
            }
            else if (second === "normal") {
                var erase = second
            }
            setCookie(erase,"",0);
            print("cookie reset")
        }
        else {
            print("parameter 'escirc', 'normal', or 'fishbowl':")
            }

        break;

        case "pirate":

        application = "pirate";


        if (splitCommand.length === 1) {
            print("command 'enpr' or 'pren' and word(s) or 'add' ");
            break;}

        var translation = "";

        switch(second) {
            case 'enpr':
            var i;
            for (i=2;i<splitCommand.length;i++) {

                var originalIndex = dictionary.indexOf(splitCommand[i]);
                if (originalIndex > 0) {
                translation += dictionary[originalIndex+1]+" ";}
                else {translation += splitCommand[i]+" ";}}
            if (translation === "") {print('error: ye word not found');}
            break;

            case 'pren':

            var i;
            for (i=2;i<splitCommand.length;i++) {
                var originalIndex = dictionary.indexOf(splitCommand[i]);
                if (originalIndex > 0) {
                translation += dictionary[originalIndex-1]+" ";}
                else {translation += splitCommand[i]+" ";}}
            if (translation === "") {print('error: ye word not found');}
            break;

            case 'add':
            print('*changes deleted on exit*');
            if (third === "") {print("'enpr' or 'pren:'")}
            else {
            dictionary.push(third);
            dictionary.push(fourth);
            dictionary.push(third);
            print("added " + third + " " + fourth);}


            break;

            default:
            var i;
            for (i=1;i<splitCommand.length;i++) {
            console.log(splitCommand[i]);
                var originalIndex = dictionary.indexOf(splitCommand[i]);
                if (originalIndex > 0) {
                translation += dictionary[originalIndex+1]+" ";}
                else {translation += splitCommand[i]+" ";}}
            if (translation === "") {print('error: ye word not found');}
            break;
            }

        if (translation != ""){ print("translation be: " + translation);}

        break;

//            end of pirate

        default:
        print(first+ ": command not found, type 'help'");
        break;
    }

}