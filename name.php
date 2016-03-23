<html>
<head>
    <title>login</title>
    <style>
        h1 {
        vertical-align:middle;
        text-align:middle;
        font-family:Verdana;
        padding:50px;
        }

        form {
        width:60%;
        margin:auto;
        padding:50px;
        }

        select {
            padding:10px;
            height:35px;
            margin: 0;
            -webkit-border-radius:0;
            -moz-border-radius:0;
            border-radius:0;
            -webkit-box-shadow: 0 3px 0 #ccc, 0 -1px #fff inset;
            -moz-box-shadow: 0 3px 0 #ccc, 0 -1px #fff inset;
            box-shadow: none;
            background: #f8f8f8;
            color:#888;
            border:none;
            outline:none;
            display: inline-block;
            -moz-appearance:none;
            appearance:none;
            cursor:pointer;
    }


        input[type="text"], input[type="password"] {
        padding: 10px;
        margin:3px;
        width:40%;
        border: none;
        border-bottom: solid 2px #c9c9c9;
        transition: border 0.3s;
        }
        input[type="text"]:focus, input[type="password"]:focus,
        input[type="text"].focus, input[type="password"].focus {
        outline:none;
        border-bottom: solid 2px #969696;
        }

        input[type="submit"] {
        border-radius:0;
        color:white;
        border:none;
        padding:10px;
        margin:10px;
        background-color:gray;
        }

        #container {
        width:60vw;
        height:60vh;
        margin:auto;
        margin-top:10vh;
        background-color:yellow;
        border: thick dotted black;
        }
    </style>

</head>

<body>


<?php
    session_start();

    $users = array('mak2vr','mpm5mh','iap5fk','kml4bz','bjm3j');
    $passwords = array('glhkj','shutup','khourtney','kimothy','cats');

    $fishbowl = array_merge(array('fishbowl'), $users);
    $fishpass = array_merge(array('fishbowl'), $passwords);

    $normal = array('normal', 'mak2vr');
    $normpass = array('normal', 'glhkj');

    function login($cookie, $home, $userlist, $passlist) {

        echo '<div id="container"><h1>' . $cookie . ' login.</h1><form name="login" method="POST" action="name.php"><input type="text" name="user"  value="mak2vr"><input type="password" name="pass" placeholder="password"><input type="submit" id="submit" name="submit" value="login"></form></div>';

        if (isset($_POST['user'])) {
            $user_in = $_POST['user'];
            $pass_in = $_POST['pass'];

            if (in_array($user_in,$userlist)) {
                $index = array_search($user_in, $userlist);
                if ($passlist[$index] == $pass_in) {
                    echo success;
                    $_SESSION[$cookie] = $user_in;
                    header('Location:' . $home . '?' . rand());
                }
                else {
                    echo "wrong password";
                }
            }

            else  {
                echo "log in to your " . $cookie . " account.";
            }
        }
    }

    if ($_SESSION['login'] == "choose") {
        echo '<h3 style="font-family:Verdana">please choose below</h3><form name="login" method="POST" action="name.php" autocomplete="off"><select name="choice"><option value="user">Engineering/ESCIRC</option><option value="fishbowl">Fishbowl/IRC</option><option value="normal">Normal Template</option></select><input type="submit"></form>';
        if (isset($_POST['choice'])) {
            $_SESSION['login'] = $_POST['choice'];
            header('Location: name.php');
            echo 'do not resubmit';
        }
    }

    elseif (isset($_SESSION['login']) && $_SESSION['login'] != "choose") {
            $login = $_SESSION['login'];

            if ($login == "normal") {
            login($login, "normal.html", $normal, $normpass);}
            if ($login == "fishbowl") {
            login($login, "irc.html", $fishbowl, $fishpass);}
            if ($login == "user") {
            login($login, "escirc.html", $users, $passwords);}
    }

    elseif (!isset($_SESSION['login'])) {
        $_SESSION['login'] = "user";
        login("user", "escirc.html", $users, $passwords);
        }


    else {
        echo "use <a href='terminal.php'>jack/ logout</a>";
    }



    ?>

</body>
</html>
