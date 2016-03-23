<html>
<head>
<title>messaging</title>
<style>

body {
background-color:yellow;
font-family:Verdana;
}

#compose {
padding:2%;
width:60vw;
margin:auto;
margin-top:3%;
min-height:10vh;
background-color:skyblue;

}

form {
width:60%;
margin:auto;
padding:3%;
}

textarea {
        width:100%;
        rows:8;
        resize: none;
        }

input[type="text"] {
width:40%;
}

input[type="text"], textarea {
        padding: 10px;
        margin:3px;
        border: none;
        border-bottom: solid 2px #c9c9c9;
        transition: border 0.3s;
        }
        input[type="text"]:focus, textarea:focus,
        input[type="text"].focus, textarea.focus {
        outline:none;
        border-bottom: solid 2px #969696;
        }

input[type='submit'] {
border-radius:0;
color:white;
border:none;
padding:10px;
margin:10px;
background-color:gray;
}

#inbox {
padding:2%;
width:60vw;
margin:auto;
margin-top:3%;
min-height:10vh;
background-color:limegreen;
}

.msg {
border: solid 1px;
background-color:white;
margin-bottom:10px;

}

p{
padding-left:1%;
padding-right:1%;
}

.from {
padding:1%;

background-color:gray;
color:white;
font-size:11px;
}

</style>
<script>
    function submitForm() {
    $('#to').value = '';
    $('#message').value = '';
    }
</script>
</head>
<body>
<div id="compose">
    <h2>Compose</h2>
    <form id="compose-form" name="compose" method="POST" action="sandbox.php">
        <textarea id="message" rows="8" name="message" placeholder="message" autocomplete="off"></textarea>
        <input type="text" id="to" name="to" placeholder="to" autocomplete="off">
        <input type="submit" name="submit" value="send" autocomplete="off" onclick="submitForm()">
    </form>

<?php

session_start();

$set = false;
$domain = "";
$from = "";
$to = "";
date_default_timezone_set('America/New_York');

$sessions = array("user", "fishbowl", "normal");

foreach ($sessions as $session) {
        if (isset($_SESSION[$session])) {
            $domain = $session;
            $from = $_SESSION[$session];
            $set = true;
            break;
        }
    }

    if (!$set) {
    $_SESSION['login'] = 'choose';
    header('Location: ../name.php');
    }

//if (isset($_SESSION['user'])) {
//    $domain = "user";
//    $from = $_SESSION['user'];
//    }


if (isset($_POST['message'])) {

    $message_in = $_POST['message'];
    $to = $_POST['to'];
    echo "Message sent: '" . $message_in . "' from: " .  $from."@".$domain, " to: " . $to;

    $file = 'files/messages.txt';

    $current = file_get_contents($file);

    $current .= $message_in.';;'.$from.';;'.$domain.';;'.$to.';;'.date('D, M jS y @ h:i a T').';;;';
    unset($_POST);
    file_put_contents($file, $current);

    }

?>
</div>

<div id="inbox">
<h2>Inbox</h2>
<?php
error_reporting(0);
//$details = array();

$file = fopen("files/messages.txt", "r");
$messages = explode(";;;", fread($file, filesize("files/messages.txt")));
if (count($messages) != 0) {

    for ($x = count($messages); $x>-1; $x--) {
        $message = $messages[$x];
        $details = explode(';;', $message);
        if ($details[3] == $from) {
            echo "<div class='msg'><p>" . $details[0] . "</p><div class='from'>from: <span style='font-weight:bold;'>" .  $details[1]."@".$details[2] . '</span> on: '. $details[4]."</div></div>";
        }
    }
}
elseif (count($messages) == 0) {echo "<div class='msg'><p> no messages </p></div>";}

?>
</div>
</body>
</html>