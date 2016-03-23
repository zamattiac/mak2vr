var notClicked = true;
var ids = ["topleft","topmiddle","topright","middleleft","middle","middleright","bottomleft","bottommiddle","bottomright"];
var elements = document.getElementsByClassName("box");
//var r = 229;
//var g = 255;
//var b = 229;

//var i;
//var length = elements.length;
//for (i = 0, i<length, i++) {
//    var att = "notClicked"
//    elements[i].createAttribute
//}

function clear() {

    var length = elements.length;
    var i;
    for (i = 0; i < length; i++) {
        elements[i].style.backgroundColor = "#ccffdd";
    }

    setTimeout(200);
}

function backgroundColorChange(id,color) {
    document.getElementById(id).setAttribute("style","background-color:"+color+";");
}

function randomBodyColor() {
    r = Math.floor((Math.random() * (255) + 1));
    g = Math.floor((Math.random() * 255)+1);
    b = Math.floor((Math.random() * (255)) + 1);
    var color = "rgba(" + r + ","+g+ ","+b+ ","+ ".7)";
    setTimeout(backgroundColorChange("body",color),30);
}

function h() {
    clear();

    backgroundColorChange("topleft","red");
    backgroundColorChange("topright","red");

    backgroundColorChange("middleleft","yellow");
    backgroundColorChange("middle","yellow");
    backgroundColorChange("middleright","yellow");

    backgroundColorChange("bottomleft","green");
    backgroundColorChange("bottomright","green");

    setTimeout(clear,1000);
//    e();
}

function e() {

    backgroundColorChange("topleft","red");
    backgroundColorChange("topmiddle","red");
    backgroundColorChange("topright","red");

    backgroundColorChange("middleleft","yellow");
    backgroundColorChange("middle","yellow");

    backgroundColorChange("bottomleft","green");
    backgroundColorChange("bottommiddle","green");
    backgroundColorChange("bottomright","green");

    setTimeout(clear,1000);
    }

function l() {
    backgroundColorChange("topleft","red");

    backgroundColorChange("middleleft","yellow");

    backgroundColorChange("bottomleft","green");
    backgroundColorChange("bottommiddle","green");
    backgroundColorChange("bottomright","green");
    setTimeout(clear,1000);
//    o();
    }

function o() {

    backgroundColorChange("topleft","red");
    backgroundColorChange("topmiddle","red");
    backgroundColorChange("topright","red");

    backgroundColorChange("middleleft","yellow");
    backgroundColorChange("middleright","yellow");


    backgroundColorChange("bottomleft","green");
    backgroundColorChange("bottommiddle","green");
    backgroundColorChange("bottomright","green");
    setTimeout(clear,1000);
    }

function hello() {

    if (notClicked) {
    h();
    setTimeout(e,1200);
    setTimeout(l,2400);
    setTimeout(l,3600);
    setTimeout(o,4800);
    repeat = setInterval(hello,6000);
    }

    else {
        clearTimeout(e);
        clearTimeout(l);
        clearTimeout(o);
    }
}
//hello:
//window.onload =
//    h();
//    setTimeout(e,1200);
//    setTimeout(l,2400);
//    setTimeout(l,3600);
//    setTimeout(o,4800);
//
//    repeat = setInterval(hello,6000);
//    }

function runHello() {

    if (notClicked) {
        hello();
    }
}


function clicked(e) {


    notClicked = false;

    clearInterval(repeat);
    document.getElementById("footer").style.color = "white";
    setInterval(randomBodyColor,2260);
    var targ;
    if (!e) {
        var e = window.event;
    }
    if (e.target) {
        targ = e.target;
    }
    else if (e.srcElement) {
        targ = e.srcElement;
    }
    var tname = targ.id;

    if (tname !== "body" && tname != "container" && targ.className != "row"){

        var rainbow = ["black","red","orange","yellow","lightgreen","blue","purple"];
        var color = document.getElementById(tname).style.backgroundColor;
        var index = rainbow.indexOf(color);

        index ++;
        backgroundColorChange(tname,rainbow[index]);
        if (index === 6) {
            index = 0;
        }

    }

    if (document.getElementById("topleft").style.backgroundColor === "black" && document.getElementById("topmiddle").style.backgroundColor === "black" && document.getElementById("topright").style.backgroundColor === "black" && document.getElementById("middleleft").style.backgroundColor === "black"  && document.getElementById("bottomleft").style.backgroundColor === "black"  && document.getElementById("bottommiddle").style.backgroundColor === "black"  && document.getElementById("bottomright").style.backgroundColor === "black" ) {
        console.log("fetching");
        window.location.href = "irc.html";
    }

}

